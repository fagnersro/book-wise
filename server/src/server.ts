import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { bookRoutes } from './routers/books'
import { categorieRoutes } from './routers/categories'
import { ratingRoutes } from './routers/ratings'
import { usersRoutes } from './routers/user'
import { authRoutes } from './routers/auth'

const app = fastify()
app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'projectbookwise',
})

app.register(authRoutes)
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
