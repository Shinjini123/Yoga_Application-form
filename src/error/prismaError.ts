class prismaError{
    message:string;
    status_code:string;

    constructor (message:string,status_code:string){
        this.message=message;
        this.status_code=status_code;
    }
    static credentialinvalid(message:string="Credentials for the database are not valid"){
        return  new prismaError(message,'P1001');
    }
    static database_server_not_found(message:string="database server not found"){
        return  new prismaError(message,'P1002'); 
    }
    static database_dont_exist(message:string="database dont exist at the particular host"){
        return  new prismaError(message,'P1003'); 
    }
    static operation_time_out(message:string="Operation time out"){
        return new prismaError(message,'P1008');
    }
    static database_exist (message: string = "database already exist at a particular location") {
        return new prismaError (message, 'P1009');
    }
    static acess_denied(message: string = "Acess for the database denied") {
        return new prismaError (message, 'P1010');
    }

}
export default prismaError;