import { CustomErrors } from "./CustomErrors";

export class ApiError extends CustomErrors {
    constructor(message: string){
        super(message, 2000);
        this.name = "ApiError"
    }
}