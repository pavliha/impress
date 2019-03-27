import http from 'http'
import config from './config/app'
import { Helpers } from '@adonisjs/core/build/src/Helpers'
import { Ioc, Registrar } from '@adonisjs/fold'

const ioc = new Ioc()
const registrar = new Registrar(ioc)

ioc.bind('Adonis/Src/Helpers', () => {
  return new Helpers(__dirname, { config: 'config' })
})

global['make'] = ioc.make.bind(ioc)
global['use'] = ioc.use.bind(ioc)

registrar.useProviders(config.providers).registerAndBoot()

const Server = use('Server')
const Route = use('Route')
const Env = use('Env')

require('./app')

Route.commit()
Server.optimize()

const httpServer = Server.handle.bind(Server)

const PORT = Env.get('PORT')
const HOST = Env.get("HOST")

const listeningListener = () => {
  console.log(`listening on ${HOST}:${PORT}`)
}

http.createServer(httpServer)
  .listen(PORT, listeningListener)
