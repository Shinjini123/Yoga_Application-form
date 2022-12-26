"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Apierror {
    constructor(message, status_code) {
        this.message = message;
        this.status_code = status_code;
    }
    static badRequest(message = "Bad Request") {
        return new Apierror(message, 400);
    }
    static unauthorized(message = "unaauthorize") {
        return new Apierror(message, 401);
    }
    static server_not_found(message = "server not found") {
        return new Apierror(message, 404);
    }
    static internal_server_error(message = "something went wrong") {
        return new Apierror(message, 500);
    }
    static requestTimeout(message = "Request Timeout") {
        return new Apierror(message, 408);
    }
    static networkAuthenticationerror(message = "Network Error") {
        return new Apierror(message, 511);
    }
}
exports.default = Apierror;
