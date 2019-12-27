import * as dotenv from 'dotenv';

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: string,
      PORT: string,
      JWT_ENCRYPT_KEY: string,
    }
  }
}

export const loadEnvVariables = (env: string) => {
  dotenv.config({ path: `${__dirname}/../.env.${env}`});
  console.log(`* ${env} * environment variables have been loaded.`);
}