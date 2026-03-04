export const CustomResponseMessages = {
  ForbiddenErrorResourceMessage:
    "⛔ You do not have permission to carry out this action. Contact admin.",
  ConflictErrorResourceMessage:
    "⚠️ Conflict Detected Something went wrong — it looks like there's a conflict with your request.",
  UnathorizedErrorResourceMessage:
    "🔒 Access Denied!: You don’t have permission to view this page.",
  NotFoundErrorResponseMessage:
    "🚫 Not found. \n Request failed to execute request",
  BadInputErrorResponseMessage:
    "⚠️ Invalid request. Please review your input or refresh the page.",
  TooManyRequestsErrorResponseMessage:
    "⏳ Whoa there! Slow down a bit. It looks like you've made too many requests in a short period of time.",
} as const;

export class CustomUserResponseMessage {
  constructor() { }

  public notFoundErrorResponseMessage(message?: string): string {
    // 404 "This request is not found!";
    return message
      ? message
      : CustomResponseMessages.NotFoundErrorResponseMessage;
  }

  public badInputErrorResponseMessage(message?: string): string {
    // 400 "Bad request!";
    return message
      ? message
      : CustomResponseMessages.BadInputErrorResponseMessage;
  }

  public unauthorizedErrorResponseMessage(message?: string): string {
    // 401 "Unauthorized!";
    return message
      ? message
      : CustomResponseMessages.UnathorizedErrorResourceMessage;
  }

  public forbiddenErrorResponseMessage(message?: string): string {
    // 403 "Forbidden!";
    return message
      ? message
      : CustomResponseMessages.ForbiddenErrorResourceMessage;
  }

  public conflictErrorResponseMessage(message?: string): string {
    // 409 "Unauthorized!";
    return message
      ? message
      : CustomResponseMessages.ConflictErrorResourceMessage;
  }

  public tooManyRequestsErrorResponseMessage(message?: string): string {
    // 429 "Too many!";
    return message
      ? message
      : CustomResponseMessages.TooManyRequestsErrorResponseMessage;
  }
}

// Invalid request. Please check your input and try again.
