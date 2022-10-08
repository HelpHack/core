import { Router, HttpServer } from 'helphack-router'
import createRabbitManger from './mq';

export default class App {
  start = async () => {
    this.queueManager = await createRabbitManger()
    this.router = new Router(this.queueManager)
    this.httpServer = new HttpServer(8080, {
      rabbitmq: async () => ({ status: this.queueManager.isHealthy ? 'OK' : 'DOWN' }),
    })

    this.httpServer.start();

    this.router.get('core', '/core/requests', this.handleRequestSearch)
  }

  handleRequestSearch = async (request) => {
    console.log(request)
  }
}