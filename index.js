
import Fastify from "fastify";
import { data } from "./item.js";

import auth from "./route/auth.js";
import fastifyCors from "@fastify/cors";

const app = Fastify({logger:true})
app.register(auth);
app.register(fastifyCors, {
  origin:'*', 
  methods:['POST', 'PUT', 'GET'],
  allowedHeaders:['Content-Type'],

})



app.listen({ port: 3000 }, function (err, address) {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
  })
