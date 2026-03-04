export interface ServerError {
  status: string;
  error_description: string;
  error: string;
  error_details: {
    isClientError: boolean;
  }
}

export type OriginalError = {
  originalError: ServerError;
};
