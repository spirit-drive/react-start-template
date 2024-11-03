interface ErrorResponseItem {
  message: string;
}

interface ErrorResponse {
  errors: ErrorResponseItem[];
}

export const transformErrorResponse = (response: { data: ErrorResponse; status: number }) => {
  return response.data.errors[0].message || `${response.status} error`;
};
