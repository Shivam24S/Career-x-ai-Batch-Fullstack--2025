class HttpError extends Error{
    constructor(message,statuscode){
        super(message)
        this.statuscode = statuscode
    }
}

export default HttpError