import shelljs from 'shelljs'

// Copy all the view templates
shelljs.cp('-R', 'src/static', 'dist/static')
shelljs.cp('-R', 'src/graphql/schema/*/*', 'dist/graphql/schema')
