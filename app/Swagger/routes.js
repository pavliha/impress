const Route = use('Route')
const Helpers = use('Adonis/Src/Helpers')

debugger
const fs = use('fs')

const readFile = Helpers.promisify(fs.readFile)

/**
 *
 * Swagger route
 *
 * */

Route.get('/', () => readFile(Helpers.publicPath('index.html')))
