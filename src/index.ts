import Fastify from "fastify";
import { paymentRoutes } from "./routes/payment.routes";
import dotenv from 'dotenv';

const app = Fastify({ logger: true});

dotenv.config()

app.register(paymentRoutes);

const start = async () => {
    try {
        await app.listen({ port: 3000})
        console.log(`Server running at http://localhost:3000`)
    } catch (e) {
        app.log.error(e);
        process.exit(1)
    }
};

start()