import { MongoClient } from 'mongodb'

export default class Database {
  constructor(app) {
    this.app = app
    this.client = new MongoClient(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:27017`)
  }

  start = async () => {
    await this.client.connect()
    await this.client.db("admin").command({ ping: 1 });

    this.app.get('/users', this.getUsers)
    this.users = this.client.db('oxylion').collection('Users')
    console.log('Seima kurwa')
  }

  getUsers = (request) => {
    console.log(request)

    return this.users.find({})
  }
}