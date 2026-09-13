import Fastify, { FastifyInstance } from "fastify";

export function buildApp(): FastifyInstance {
  const app = Fastify({ logger: true });
  app.get("/healthz", async () => ({ status: "ok", service: "q003-lunar-material" }));
  return app;
}

if (require.main === module) {
  buildApp().listen({ host: "0.0.0.0", port: Number(process.env.PORT ?? 8080) });
}
