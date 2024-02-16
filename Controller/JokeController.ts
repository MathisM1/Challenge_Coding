import axios, { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError";
import logger from "./logger";


export class JokeController {
    

    // Route pour récupérer les données blagues par défaut
    public async getJokeByDefault(req: Request, res:Response, next: NextFunction):Promise<void> {
            

            try{
                const response : AxiosResponse = await axios.get(
                    `https://v2.jokeapi.dev/joke/Any?lang=fr` // URL de l'API de JokeAPI pour récupérer les blagues
                    
                );
                const data = response.data;

                logger.info(`Données de la blague : ${JSON.stringify(data)}`);
                
                res.json(data);
            }
            catch(error){
                logger.error(`Erreur lors de la récupération de la blague : ${error}`);
            if (axios.isAxiosError(error)) {
                const status = error.response?.status || 500;
                const message = error.response?.data || "Erreur interne du serveur";
                res.status(status);
                next(new ApiError(`Erreur lors de la récupération de la blague `));
            } else {
                res.status(500);
                next(new ApiError("Erreur interne du serveur"));
            }
        }
    }

    // Route pour récupérer les données blagues sombres
    public async getJokeDark(req: Request, res:Response, next: NextFunction):Promise<void> {
            

            try{
                const response : AxiosResponse = await axios.get(
                    `https://v2.jokeapi.dev/joke/Dark?lang=fr` // URL de l'API de JokeAPI pour récupérer les blagues
                );
                const data = response.data;

                logger.info(`Données de la blague : ${JSON.stringify(data)}`);
                
                res.json(data);
            }
            catch(error){
                logger.error(`Erreur lors de la récupération de la blague : ${error}`);
            if (axios.isAxiosError(error)) {
                const status = error.response?.status || 500;
                const message = error.response?.data || "Erreur interne du serveur";
                res.status(status);
                next(new ApiError(`Erreur lors de la récupération de la blague `));
            } else {
                res.status(500);
                next(new ApiError("Erreur interne du serveur"));
            }
        }
    }


    // Route pour récupérer les données blagues par mot clé
    public async getJokeBySearch(req: Request, res:Response, next: NextFunction):Promise<void> {
            const word: string = req.params.word; 

            try{
                const response : AxiosResponse = await axios.get(
                    `https://v2.jokeapi.dev/joke/Any?lang=fr&contains=${word}` // URL de l'API de JokeAPI pour récupérer les blagues
                    
                );
                const data = response.data;

                logger.info(`Données de la blague ${word}: ${JSON.stringify(data)}`); // Log des données de la blague
                
                res.json(data);
            }
            catch(error){
                logger.error(`Erreur lors de la récupération de la blague ${word}: ${error}`);
            if (axios.isAxiosError(error)) {
                const status = error.response?.status || 500;
                const message = error.response?.data || "Erreur interne du serveur";
                res.status(status);
                next(new ApiError(`Erreur lors de la récupération de la blague ${word}`));
            } else {
                res.status(500);
                next(new ApiError("Erreur interne du serveur"));
            }
        }
    }
}