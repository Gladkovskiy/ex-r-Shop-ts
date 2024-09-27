import express, {Response} from 'express'
import {ApolloServer} from '@apollo/server'
import {expressMiddleware} from '@apollo/server/express4'
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer'
import parser from 'body-parser'
import cors from 'cors'
import http from 'http'
import dotenv from 'dotenv'
import {graphqlUploadExpress} from 'graphql-upload-ts'

import {addMocksToSchema} from '@graphql-tools/mock'
import {makeExecutableSchema} from '@graphql-tools/schema'

import {typeDefs} from './graphql/schema'
import {resolvers} from './graphql/resolvers'
import {IControllers} from './controllers/index'
import {controllers} from './controllers'
import {IJwt, jwtDecode, jwtDecodeCookie} from './utils/token'
import path from 'path'
import mongoose from 'mongoose'

dotenv.config()
const port = process.env.PORT

// интерфейс контекста в apollo server
export interface MyContext {
  user?: IJwt | null
  controllers?: IControllers
  res?: Response
}

const app = express()

// отдача файлов с сервера
app.use('/img', express.static(path.resolve('./img')))

// для передачи файлов через apollo server
app.use(graphqlUploadExpress())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve('client', 'build')))
  app.get('*', (_, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'))
    console.log(path.resolve())
  })
}

// для правильного заверения работы
const httpServer = http.createServer(app)

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  // для начала разработки моковые значения
  /* schema: addMocksToSchema({
    schema: makeExecutableSchema({typeDefs}),
  }), */
  // безопасность для передачи данных
  csrfPrevention: true,
  plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
})

const start = async () => {
  try {
    await server.start()

    app.use(
      '/graphql',
      cors<cors.CorsRequest>({
        // origin: 'http://localhost:3000',
        origin: true,
        credentials: true,
        exposedHeaders: ['set-cookie'],
      }),
      parser.json(),

      expressMiddleware(server, {
        context: async ({req, res}) => {
          return {
            user: jwtDecodeCookie(req.headers.cookie),
            controllers,
            res,
          }
        },
      })
    )

    await new Promise<void>(resolve => httpServer.listen({port}, resolve))

    console.log(`🚀 Server ready at http://localhost:${port}/`)

    // для PM2
    process.send('ready')
  } catch (error) {
    console.log(error)
  }
}

start()

// для работы с PM2 (при завершении работы)
process.on('SIGINT', () => {
  server
    .stop()
    .then(() => {
      console.log('server stop')
    })
    .catch(err => {
      console.error(err)
      process.exit(1)
    })

  console.log('SIGINT')

  mongoose.connection.close().then(() => {
    console.log('Mongoose connection disconnected')
    process.exit(0)
  })
})
