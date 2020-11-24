// Modulos internos
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// Modulos creados
const usuario = require("./routes/usuario");
const auth = require("./routes/auth");
const pedido = require("./routes/pedido");

// App
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/usuario/", usuario);
app.use("/api/auth/", auth);
app.use("/api/pedido/", pedido);

// Pruerto de ejecucion
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Port conection: " + port));
// Registro en Mongo
mongoose
  .connect("mongodb://localhost/acua", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB conection : ON"))
  .catch((error) => console.log("DB conection: OFF"));

/* 
registro
{
    "nombre": "Jose",
    "apellido": "Jimenez",
    "tipoDocumento": "CC",
    "numeroDocumento": "123456789",
    "departamento": "Bogotá",
    "ciudad": "Bogotá",
    "direccion": "Suba",
    "telefono": "316-659 9876",
    "correo": "jf@mail.com",
    "pass": "1234",
} 

login
{
    "correo": "jf@mail.com",
    "pass":"1234"
}
*/