import { UserModelo } from "../models/UserModel.js";


UserModelo.create({
    Nombre: "Jorge",
    Apepat: "Vera",
    Apemat: "Dominguez",
    Edad: 20,
    Registrado: true
})

export const test = () =>{
    console.log("si funciona el controlador")
}