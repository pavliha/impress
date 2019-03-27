const Route = use('Route')

const route = Route.namespace('App/Swagger')

route.get('/', 'SwaggerController.index')
