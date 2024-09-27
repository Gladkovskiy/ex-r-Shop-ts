export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string
      SECRET_KEY: string
      NODE_ENV: 'production' | 'development'
      STATIC_PATH: string
      AUTH_DB: string
      PRODUCTS_DB: string
      PRODUCT_SETTINGS_DB: string
      COMPANY_MAIL: string
      MAIL_PASS: string
    }
  }
}
