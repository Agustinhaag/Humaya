import express  from "express";
const app = express();
import route from "./src/route.js"
import path from "path";
import { fileURLToPath } from 'url';
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../humaya/build')))

app.use("/", route)

const port = 3000
app.listen(port, ()=>{
    console.log("Escuchando por puerto: " + port)
})