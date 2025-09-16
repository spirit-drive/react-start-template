import { ErrorMessage } from "./errorMessage"

export type ResponseError = {
    status: number,
    data: {
        errors: ErrorMessage[]
    }
}