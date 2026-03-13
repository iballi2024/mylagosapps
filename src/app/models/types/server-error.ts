export interface ServerError {
  data: unknown;
  message: string;
  success: boolean;
  error: string | string[];
}

export type OriginalError = {
  originalError: ServerError;
};

/**
 * 
 * export interface ServerError {
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

 */
