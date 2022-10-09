import express from 'express'
import bodyParser from 'body-parser'
import Database from './database/index.js'

export default class App {
  start = async () => {
    const app = express()

    app.use(express.json());

    await new Database(app).start()

    app.get('/', (req) => {
      console.log(req)
    })
  }

  handleRequestSearch = async (request) => {
    console.log(request)
  }
}