import { FastifyInstance } from "fastify";
import { Content } from "../modules/content";


const content = new Content()

export async function contentRoutes(app: FastifyInstance){
    app.post('/content', content.Get)
}