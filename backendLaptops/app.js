const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const puerto = 8080

app.use(bodyParser.json())

app.use("/laptops",(request,response,next)=>{
    console.log("headers",request.headers)
    console.log("body",request.body)
    next();
});

const laptops = [
    {id:100, marca:"Hp", procesador:"intel Core i7", memoria:"16GB", disco:"500GB"},
    {id:101, marca:"Apple", procesador:"AMD Ryzen 7 5700G", memoria:"12GB", disco:"1Tb"},
    {id:102, marca:"Sansung", procesador:"intel Core i5", memoria:"16GB", disco:"500GB"},
    {id:103, marca:"Lenovo", procesador:"intel Core i9", memoria:"8GB", disco:"250GB"},
    {id:104, marca:"Asus", procesador:"intel Core i5", memoria:"32GB", disco:"2TB"}
]

app.post("/laptops",(request,response) => {
    request.body.id = 105;
    response.send(request.body)
})

app.get("/laptops/:idParam",(request,response) => {
    console.log("id: "+request.params.idParam);
    response.send({id:request.params.idParam, marca:"Hp", procesador:"intel Core i7", memoria:"16GB", disco:"500GB"})
})

app.get("/laptops",(request,response)=>{
    response.send(laptops)
})

app.put("/laptops/:idParam",(request,response)=>{
    console.log("id: "+request.params.idParam);
    response.send(request.body)
})

app.delete("/laptops/:idParam",(request,response)=>{
    console.log("id: "+request.params.idParam);
    response.send({id:request.params.idParam})
})

app.listen(puerto,()=>{
    console.log("server is running on port "+ puerto);
});