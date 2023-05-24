import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

export async function categorieRoutes(app: FastifyInstance) {
  app.get('/categories', async () => {
    const categories = await prisma.category.findMany()

    return categories
  })

  app.get('/categories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const category = await prisma.category.findFirstOrThrow({
      where: {
        id,
      },
    })

    return category
  })
}
