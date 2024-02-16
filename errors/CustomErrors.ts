import { CUSTOMER_ERROR_NAME } from "../constantes/errorMessage";

export class CustomErrors extends Error {
    errorcode: number;
    constructor(message: string, errorcode: number){
        super(message);
        this.name = CUSTOMER_ERROR_NAME
        this.errorcode = errorcode;
    }
}