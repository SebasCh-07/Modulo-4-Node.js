const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const puerto = 3001

app.use(bodyParser.json())

app.use("/contactos",(request,response,next)=>{
    console.log("headers",request.headers)
    console.log("bodys",request.body)
    next();
});

const contactos = [
    {id:1, nombre:"Sebas", apellido:"Chamorro",celular:"0995708722"},
    {id:2, nombre:"Jefferson", apellido:"Chamorro",celular:"0999846287"},
    {id:3, nombre:"Jose", apellido:"Mena",celular:"0995745522"},
    {id:4, nombre:"Luisa", apellido:"Gonzales",celular:"052368722"},]

app.get("/contactos",(request, response)=>{
    response.send(contactos)
});

app.post("/contactos",(request,response)=>{
    request.body.id = 5;
    response.send(request.body)
});

app.put("/contactos/:idParam",(request,response)=>{
    console.log("id: "+request.params.idParam);
    response.send(request.body)
})

app.delete("/contactos/:idParam",(request,response)=>{
    console.log("id: "+request.params.idParam);
    response.send()
})

app.listen(puerto,()=>{
    console.log("server is running on port "+ puerto);
});