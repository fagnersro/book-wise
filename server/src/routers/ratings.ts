import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function ratingRoutes(app: FastifyInstance) {
  app.get('/ratings', async () => {
    const ratings = await prisma.rating.findMany()

    return ratings
  })

  app.get('/ratings/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const rating = await prisma.rating.findFirstOrThrow({
      where: {
        id,
      },
    })

    return rating
  })
}
