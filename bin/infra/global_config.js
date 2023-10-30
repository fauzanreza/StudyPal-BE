import "dotenv/config"
import confidence from "confidence";

const config = {
    port: process.env.PORT,
    basicAuthApi: [
      {
        username: process.env.BASIC_AUTH_USERNAME,
        password: process.env.BASIC_AUTH_PASSWORD
      }
    ],
    postgreConfig: {
        user: process.env.USERNAME,
        host: process.env.HOST,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        port: process.env.DB_PORT,
        max:  parseInt(process.env.MAX),
        idleTimeoutMillis: parseInt(process.env.IDLE_TIMEOUT),
        connectionTimeoutMillis: parseInt(process.env.CONNECTION_TIMEOUT)
    },
    key: process.env.SECRET_KEY,
  };
  
  const store = new confidence.Store(config);

  export {
    config
}