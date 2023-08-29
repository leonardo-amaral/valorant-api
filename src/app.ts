import fastify from 'fastify'
import { contentRoutes } from './routes/contentRoutes'

export const app = fastify()

app.register(contentRoutes, { prefix: "/valorant"})

