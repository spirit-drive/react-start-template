import { ResponseError } from "src/models/response/responseError"

export const getError = (error: ResponseError): string => {
    return error.data.errors.map(x => x.message).join('\n')
}