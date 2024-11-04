export type TErrorResponse = {
    response: { data: { errors: TServerError[] } }
}

export type TServerError = {
    message: string;
}

export type TServerErrors = {
    errors: TServerError[]
}

export function isTErrorResponse(err: unknown): err is TErrorResponse {
    const errTest = err as TErrorResponse;
    if (errTest.hasOwnProperty('response') && errTest.response.hasOwnProperty('data') && errTest.response.data.hasOwnProperty('errors')){
        if(isTServerErrors(errTest.response.data)){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

export function isTServerErrors(err: unknown): err is TServerErrors {
    const errTest = err as TServerErrors;
    if (errTest && errTest.hasOwnProperty('errors') && Array.isArray(errTest.errors)) {
        let messagePropsNotFound = false;
        errTest.errors.forEach(e => {
            if (!e.hasOwnProperty('message')) {
                messagePropsNotFound = true;
            }
        })

        if (messagePropsNotFound == false) {
            return true;
        } else {
            return false;
        }
    }

    return false;
}


