import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { test } from "./backend/controllers/UserController.js"

dotenv.config()
mongoose.connect(process.env.url)
    .then(() => {
        console.log("Funciona la conexion a la BD")
    })
    .catch((error) => {
        console.log("No funciona la conexion a la BD", error)
    })

const app = express()
app.use(cors())
app.listen(4000, () => {
    console.log("se oye")
})

test()