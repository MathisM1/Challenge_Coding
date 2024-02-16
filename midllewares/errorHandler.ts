import {Request, Response, NextFunction } from "express";
import { CustomErrors } from "../errors/CustomErrors";

export function errorHandler(
    err: Error, req: Request,res: Response, next: NextFunction){
        console.log(err.stack);
        if(err instanceof CustomErrors){
            console.log("name of the error  :", err.name)
            res.status(500).json({error: err.message, errorCode: err.errorcode});
        }else {
            res.status(500).json({error: "Erreur inattendue"});
        }
        next(err);
    }