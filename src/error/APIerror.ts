class Apierror{
    message:string;
    status_code:number;

    constructor (message:string,status_code:number){
        this.message=message;
        this.status_code=status_code;
    }
    static badRequest(message:string="Bad Request"){
        return  new Apierror(message,400);
    }
    static unauthorized(message:string="unaauthorize"){
        return  new Apierror(message,401); 
    }
    static server_not_found(message:string="server not found"){
        return  new Apierror(message,404); 
    }
    static internal_server_error(message:string="something went wrong"){
        return new Apierror(message,500);
    }
    static requestTimeout (message: string = "Request Timeout") {
        return new Apierror (message, 408);
    }
    static networkAuthenticationerror (message: string = "Network Error") {
        return new Apierror (message, 511);
    }

}
export default Apierror;