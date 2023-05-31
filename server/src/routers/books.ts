import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function bookRoutes(app: FastifyInstance) {
  app.get('/books', async () => {
    const books = await prisma.book.findMany({
      include: {
        ratings: true,
      },
    })

    return books
  })

  app.get('/books/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const book = await prisma.book.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return book
  })
}
