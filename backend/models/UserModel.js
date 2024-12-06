import {Schema, model} from "mongoose"


const EsquemaDeUsuarios = new Schema ({
    Nombre:String,
    Apepat:String,
    Apemat:String,
    Edad:Number,
    Registrado:Boolean
})


export const UserModelo = new model ("Esquema De Usuarios", EsquemaDeUsuarios)