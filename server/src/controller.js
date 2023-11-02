import path from "path";
import { postEmail } from "./service.js";
import {validationResult} from "express-validator"

export const mostrar =  (req, res) => {
    const __dirname = path.resolve(); 
    res.sendFile(path.join(__dirname, '../humaya/build', 'index.html'));
}

export const enviar = async (req,res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('Errores de validación:', errors); 
      res.status(400).json({ errors: errors.array() });
    } else {
        res.status(200).json({ status: "success" });
        next()
        const result = await postEmail(req.body)
    }
}