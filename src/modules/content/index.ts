import { FastifyReply, FastifyRequest } from "fastify"

export class Content {
    async Get(request: FastifyRequest, reply: FastifyReply) {
       try{
       }catch(error){
        return reply.status(500).send({
            message: "Internal Server Error"
        })
       }
    }
}