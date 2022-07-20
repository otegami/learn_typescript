import fastify from "fastify"

const app = fastify()

app.get('/', (req, reply) => {
  reply.send("Hello, world!")
})

app.listen({ port: 8080 })
