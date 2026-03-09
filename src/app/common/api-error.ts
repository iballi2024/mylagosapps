/* eslint-disable @typescript-eslint/no-explicit-any */
// export class ApiError extends Error {
//   status: number;
//   data?: unknown;

//   constructor(message: string, status: number, data?: unknown) {
//     super(message);
//     this.name = "ApiError";
//     this.status = status;
//     this.data = data;
//   }
// }

export class ApiError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    // Explicitly set the name to the class name
    this.name = this.constructor.name;

    // Fix the prototype chain for 'instanceof' support in older environments
    Object.setPrototypeOf(this, ApiError.prototype);

    // Optional: Capture stack trace (Node.js environment)
    if ((Error as any).captureStackTrace) {
      (Error as any).captureStackTrace(this, this.constructor);
    }
  }
}
