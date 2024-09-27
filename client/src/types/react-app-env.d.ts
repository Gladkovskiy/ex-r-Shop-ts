/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    //types of envs
    NODE_ENV: 'development' | 'production' | 'test'
    REACT_APP_SERVER: string
    REACT_APP_GOOGLE: string
  }
}
