import express, {NextFunction, Request, Response} from "express";
import { JokeController } from "./Controller/JokeController";
import { request } from "http";
import { errorHandler } from "./midllewares/errorHandler";
import logger from './Controller/logger';


const app = express();

const jokeController = new JokeController();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000; // 3000 est le port par defaut si le port n'est pas defini



// Route pour récupérer les données 
app.get("/test", (req: Request, res: Response) => { 
    res.send("Coucou, l'api des blagues est active") 
})

// Get Joke Route
app.get('/joke', async(req: Request, res: Response, next: NextFunction) => { // Route pour récupérer les données blagues
    await jokeController.getJokeByDefault(req,res, next);
})

app.get('/dark', async(req: Request, res: Response, next: NextFunction) => { // Route pour récupérer les données blagues
  await jokeController.getJokeDark(req,res, next);
})

app.get('/joke/:word', async(req: Request, res: Response, next: NextFunction) => { // Route pour récupérer les données blagues
  await jokeController.getJokeBySearch(req,res, next);
})

app.use(errorHandler); // Utilisation du middleware errorHandler 

app.use((req, res, next) => {
    const { method, url } = req;
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    
    logger.info(`Requête entrante: ${method} ${url} - IP: ${clientIp}`);
    
    res.on('finish', () => {
      logger.info(`Réponse sortante: ${res.statusCode} - Date et Heure: ${new Date().toISOString()}`);
    });
    
    next();
  });


// Lancement du server
app.listen(PORT, () => {
    console.log(`Le server est en cours d'execution sur le port ${PORT}`); //  Le server est en cours d'execution sur le port 3000
})
