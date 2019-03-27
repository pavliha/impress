import http from 'http'
import app from './start/app'
import { Helpers } from '@adonisjs/core/build/src/Helpers'
import { Ioc, Registrar } from '@adonisjs/fold'

const ioc = new Ioc()
const registrar = new Registrar(ioc)

ioc.bind('Adonis/Src/Helpers', (app) => {
  debugger
  return new Helpers(__dirname, { config: 'config' })
})

Object.entries(app.aliases).forEach(([key, value]) => {
  console.log(key, value)
  debugger
  ioc.alias(value, key)
})

global['make'] = ioc.make.bind(ioc)
global['use'] = ioc.use.bind(ioc)

registrar.useProviders(app.providers).registerAndBoot()

const Server = use('Server')
const Route = use('Route')
const Env = use('Env')

require('./app')

Route.commit()
Server.optimize()

const httpServer = Server.handle.bind(Server)

const PORT = Env.get('PORT')
const HOST = Env.get('HOST')

const listeningListener = () => {
  console.log(`listening on ${HOST}:${PORT}`)
}

http.createServer(httpServer)
  .listen(PORT, listeningListener)
