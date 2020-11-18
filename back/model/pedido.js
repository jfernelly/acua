// Modulos internos
const mongoose = require("mongoose");
// Esquema
const esquemaPedido = new mongoose.Schema({
  idUsuario: String,
  pedido: String,
  imagen: String,
  estado: String,
  fecha: {
    type: Date,
    default: Date.now,
  },
});
// Creamos los exports
const Pedido = mongoose.model("pedido", esquemaPedido);
module.exports = Pedido;
