/* eslint-disable @typescript-eslint/no-explicit-any */
export class AppError {
  originalError?: any;

  constructor(originalError?: any) {
    this.originalError = originalError;
  }
}
