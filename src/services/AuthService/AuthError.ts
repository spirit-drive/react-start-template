export interface ErrorExtension {
    code: string
}

export interface AuthErrorMessage {
    message: string
    extensions: ErrorExtension
}

export interface AuthError {
    errors: AuthErrorMessage[]
}

export interface ErrorResponse {
    data: AuthError
    status: number
}