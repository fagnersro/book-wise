import { FastifyInstance } from 'fastify'
import axios from 'axios'
import { z } from 'zod'
// import { prisma } from '../lib/prisma'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request) => {
    const bodySchema = z.object({
      code: z.string(),
    })

    const { code } = bodySchema.parse(request.body)

    const accessTokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      },
    )

    const { access_token } = accessTokenResponse.data

    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    const user = userResponse.data

    // const userSchema = z.object({
    //   id: number(),
    //   login: string(),
    //   name: string(),
    //   avatar_url: z.string().url(),
    // })

    // const userInfo = userSchema.parse(userResponse.data)

    // let user = await prisma.user.findUnique({
    //   where: {
    //     github_id: userInfo.id,
    //   },
    // })

    // if (!user) {
    //   user = await prisma.user.create({
    //     name: userInfo.name,
    //     avatar_url: userInfo.avatar_url,
    //   })
    // }

    return {
      user,
    }
  })
}
