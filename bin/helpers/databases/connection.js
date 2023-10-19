import postgre from 'pg';
const { Pool } = postgre;
import {config} from "../../infra/global_config.js"
import 'dotenv/config'

const connectionConfig = config.postgreConfig;

const pool = new Pool(connectionConfig)

export const query = (text, params, callback) => {
  return pool.query(text, params, callback)
}

export const getClient = () => {
  return pool.connect()
}

export const releaseClient = () => {
  return pool.release()
}

export const endClient = () => {
  return pool.end()
}