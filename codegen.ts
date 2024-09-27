import type {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  //место нахождения схем
  schema: './src/graphql/**/*.graphql',
  generates: {
    //место создания файла с типами
    'src/graphql/generated-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
  config: {
    useIndexSignature: true,
    //импорт интерфейса контекста, с файла generated-types.ts
    contextType: '../index#MyContext',
  },
}

export default config
