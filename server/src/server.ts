import fastify from 'fastify'
import cors from '@fastify/cors'
import { bookRoutes } from './routers/books'
import { categorieRoutes } from './routers/categories'
import { ratingRoutes } from './routers/ratings'
import { usersRoutes } from './routers/user'

const app = fastify()
app.register(cors, {
  origin: true,
})

app.register(bookRoutes)
app.register(categorieRoutes)
app.register(ratingRoutes)
app.register(usersRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on hhtt://localhost:3333')
  })
