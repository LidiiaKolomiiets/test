import fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url';
import vegetables from './vegetables.mjs';
import fruits from './fruits.mjs';
import products from './products.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = fastify()

server.register(cors, {
  // put your options here
})

server.setNotFoundHandler((_, reply) => {
  return reply.sendFile('index.html')
})

server.register(fastifyStatic, {
  root: path.join(__dirname, '../dist')
})


server.get('/products', (request, reply) => {
  return reply.send(products)
})

server.get('/fruits', (request, reply) => {
  return reply.send(fruits)
})

server.get('/vegetables', (request, reply) => {
  return reply.send(vegetables)
})

server.listen({ port: 5557 })
  .then(() => console.log('Server started'))
  .catch((error) => console.log('Error'))