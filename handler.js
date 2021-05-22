'use strict';
const axios = require("axios");
const { persona } = require("./model/persona")
const header = require("./util/headers")
const mysql = require("./util/connections")
const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const mensaje = (statusCode, body, e, f) => {
  const res =  {
    statusCode: statusCode,
    body: JSON.stringify(body)
  };
  return res
};
/*
Metodo de integración con StarWars API
*/
module.exports.obtenerPersona = async (event, context) => {
  try {
    const { id } = event.pathParameters;
    const res = await axios.get(`http://swapi.py4e.com/api/people/${id}/?format=json`);
    return mensaje(200, persona(res.data))
  } catch (e) {
    return mensaje(400, {"mensaje" : "Ocurrio un error en la busqueda de la persona."})
  }
};

/*
Las transacciones tanto insert y select se deberían realizar en un sp y ser llamado
en estos metodos, por temas de que puedan ejecutar directamente y probar
estoy poniendo el insert y select en duro dentro de los metodos.
*/
module.exports.crearEmpleado = async (event, context) => {
  try {
    let nuevoEmpleado = JSON.parse(event['body'])
    if (!regex.test(nuevoEmpleado.correo)) {
      return mensaje(409, {"mensaje" : "Ingrese un correo valido."})
    }
    let empleado = await mysql.query('SELECT * FROM empleados where correo = ?', [nuevoEmpleado.correo])
    if (empleado[0] != null) {
      return mensaje(409, {"mensaje" : "Ya se existe un empleado con ese correo."})
    }
   await mysql.transaction()
  .query('INSERT INTO empleados (nombre, correo) VALUES(?, ?)', [nuevoEmpleado.nombre, nuevoEmpleado.correo])
  .rollback(e => { return mensaje(400, {"mensaje" : "Ocurrio un error al insertar el empleado."}) })
  .commit()
    await mysql.end();
    return mensaje(200, {"mensaje" : "Registro satisfactorio."})
  } catch (e) {
    return mensaje(400, {"mensaje" : "Ocurrio un error en el proceso."})
  }
};

module.exports.obtenerEmpleados = async (event, context) => {
  try {
    let empleados = await mysql.query('SELECT * FROM empleados')
    await mysql.end();
    return mensaje(200, empleados)
  } catch (e) {
    return mensaje(400, {"mensaje" : "Ocurrio un error en la busqueda de empleados."})
  }
};