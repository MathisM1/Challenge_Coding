import { CustomErrors } from "./CustomErrors";

export class DatabaseError extends CustomErrors {
    constructor(message: string){
        super(message, 2001);
        this.name ="DatabaseError";
    }
}