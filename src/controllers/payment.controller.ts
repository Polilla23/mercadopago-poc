import { FastifyRequest, FastifyReply } from "fastify";
import MercadoPago, { PreApproval } from "mercadopago";
import axios from 'axios';

export class PaymentController {
    static async createSuscription(request: FastifyRequest, reply: FastifyReply) {

        const url = 'https://api.mercadopago.com/preapproval'

        const subscriptionData = {
            reason: "Suscripción mensual a We Wise ChatBot",
            auto_recurring: {
                frequency: 1,
                frequency_type: "months",
                transaction_amount: 1000,
                currency_id: "ARS", 
            },
            back_url: "https://www.google.com",
            payer_email: "test_user_388089664@testuser.com",
            // notification_url: 'https://www.google.com' // a donde quieras recibir la notificación con método POST
        }

        try {
            // const response = await axios.post(
            //     url,
            //     subscriptionData,
            //     {
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
            //         }
            //     }
            // )
            // reply.send(response.data)

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
                },
                body: JSON.stringify(subscriptionData)
            });

            const data = await response.json()
            reply.send(data)
        } catch (e) {
            console.error('Error creating subscription: ', e)
            reply.status(500).send({ error: 'Failed to create subscription'})
        }
    }
}