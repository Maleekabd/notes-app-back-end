const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: true
    }
  })
  server.route(routes)

  await server.start()
  console.log(`server sedang berjalan pada ${server.info.uri}`)
}

init()
