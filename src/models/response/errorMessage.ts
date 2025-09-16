export type ErrorMessage = {
      name: string,
      stack: string,
      message: string,
      extensions: {
        code: string
      }
    }