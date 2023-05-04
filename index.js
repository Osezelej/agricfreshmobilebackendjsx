
import Fastify from "fastify";
import { data } from "./item.js";

const app = Fastify({logger:true})

app.get('/:id', (req, res)=>{
    let {id} = req.params;
    let item = data.find((item)=>item.id == id)
    res.send(item)

})


app.listen({ port: 3000 }, function (err, address) {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
  })
