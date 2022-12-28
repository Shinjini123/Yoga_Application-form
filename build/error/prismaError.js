"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class prismaError {
    constructor(message, status_code) {
        this.message = message;
        this.status_code = status_code;
    }
    static credentialinvalid(message = "Credentials for the database are not valid") {
        return new prismaError(message, 'P1001');
    }
    static database_server_not_found(message = "database server not found") {
        return new prismaError(message, 'P1002');
    }
    static database_dont_exist(message = "database dont exist at the particular host") {
        return new prismaError(message, 'P1003');
    }
    static operation_time_out(message = "Operation time out") {
        return new prismaError(message, 'P1008');
    }
    static database_exist(message = "database already exist at a particular location") {
        return new prismaError(message, 'P1009');
    }
    static acess_denied(message = "Acess for the database denied") {
        return new prismaError(message, 'P1010');
    }
}
exports.default = prismaError;
