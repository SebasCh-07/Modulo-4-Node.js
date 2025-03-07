const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const puerto = 8080
const { Client } = require("pg")
const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "pruebas",
    password: "sebas.2007",
    port: 5432,
})

app.use(bodyParser.json())

app.use("/contactos", (request, response, next) => {
    console.log("headers", request.headers)
    console.log("bodys", request.body)
    next();
});




app.get("/contactos", (request, response) => {
    console.log("ingresa a get")

    client.connect();
    client.query("select * from contactos")
        .then(responseQuery => {
            console.log(responseQuery.rows);
            response.send(responseQuery.rows)
            //response.json(responseQuery.rows);
            client.end();
        })
        .catch(err => {
            console.log(err);
            client.end();
        })
});






app.post("/contactos", (request, response) => {
    console.log("ingresa a post")

    client.connect();

    const { nombre, apellido, celular } = request.body;

    const query = {
        text: "insert into contactos(nombre, apellido, celular) values($1, $2, $3)",
        values: [nombre, apellido, celular],
    };

    client.query(query)
        .then(responseQuery => {
            console.log(responseQuery.rows);
            response.send(responseQuery.rows)
            //response.json(responseQuery.rows);
            client.end();
        })
        .catch(err => {
            console.log(err);
            client.end();
        })
});



app.put("/contactos/:idParam", (request, response) => {
    console.log("ingresa a put")

    client.connect();

    const { nombre, apellido, celular, id } = request.body;

    const query = {
        text: "UPDATE contactos SET nombre = $1, apellido = $2, celular = $3 WHERE id = $4",
        values: [nombre, apellido, celular, id],
    };

    client.query(query)
        .then(responseQuery => {
            console.log(responseQuery.rows);
            response.send(responseQuery.rows)
            //response.json(responseQuery.rows);
            client.end();
        })
        .catch(err => {
            console.log(err);
            client.end();
        })
})

app.delete("/contactos/:idParam", (request, response) => {
    console.log("ingresa a delete")

    client.connect();

    const id = request.params.idParam;

    const query = {
        text: 'DELETE FROM contactos WHERE id = $1',
        values: [id],
    };

    client.query(query)
        .then(responseQuery => {
            console.log(responseQuery.rows);
            response.send(responseQuery.rows)
            //response.json(responseQuery.rows);
            client.end();
        })
        .catch(err => {
            console.log(err);
            client.end();
        })
})

app.listen(puerto, () => {
    console.log("server is running on port " + puerto);
});