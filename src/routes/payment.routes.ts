import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { PaymentController } from "../controllers/payment.controller";

export async function paymentRoutes(app: FastifyInstance) {
    app.get('/create-order', PaymentController.createSuscription)

    app.get('/success', async (request: FastifyRequest, reply: FastifyReply) => {
        return { message: 'Pago existoso'}
    })

    app.get('/webhook', async (request: FastifyRequest, reply: FastifyReply) => {
        return reply.send('webhook')
    })
};