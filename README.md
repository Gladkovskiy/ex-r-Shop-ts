## Internet shop (eav model)

[1. Backend](#1)

[2. Frontend](#2)

<a id="1"></a>

#### 1. Backend

- [express](./src/index.ts)
- express distributes frontend (static file ./client/build/index.html)
- apollo server (graphql)
  - [schema](./src/graphql/schema/) ("npm run codegen" to generate "generated-types.ts", script settings [codegen.ts](./codegen.ts) )
  - [resolvers](./src/graphql/resolvers/)
  - [controllers](./src/controllers/)
  - [controllers types](./src/types/controllers/)
- mongoDB (mongoose, faset filters is implemented using aggregation)
  - [schema](./src/mongoDB/schema/)
  - [DB connetion and model](./src/mongoDB/model/)
  - [model name](./src/types/model.ts)
  - [aggregation](./src/mongoDB/aggregation/)
- [googleDrive image store](./src/utils/googleDrive.ts) (./googleKey.json)
- [cookie auth](./src/controllers/auth/user.ts)
- environment variables (./.env)
  PORT = port for express
  SECRET_KEY = secret key for jwt
  AUTH_DB = key for connection
  PRODUCT_SETTINGS_DB = key for connection
  PRODUCTS_DB = key for connection
  COMPANY_MAIL = mail for nodemailer
  MAIL_PASS = mail password
- [PM2 config](./ecosystem.config.js)
- docker
  - [dockerfile](./docker/Dockerfile)
  - [nginx config](./docker/nginx/shop.conf)
  - [compose file](./compose.yaml)

<a id="2"></a>

#### 2. Frontend

- react
- apollo client
  - [apollo client config](./client/src/apolloClent.ts)
  - [codegen config](./client/codegen.ts) (npm run codegen)
  - [graphql functions](./client/src/graphQL/)
  - [graphql hooks](./client/src/graphQL/hooks/)
- redux tool kit
  - [config rtk and redux persist](./client/src/storage/index.ts)
  - [useAction](./client/src/hooks/useAction.ts)
  - [useAppSelector](./client/src/hooks/useAppSelector.ts)
  - [slice](./client/src/storage/slice/)
- chakra ui ([style](./client/src/styles/))
- i18n
  - [sources and config](./client/src/i18n/)
  - [types](./client/src/types/i18n/)
- environment variables (./client/.env)
  REACT_APP_SERVER = express server url
  REACT_APP_GOOGLE = https://lh3.googleusercontent.com/d/
