import { BadInputError, ForbiddenError, NotFoundError } from "../common";
import { environment } from "../environment/environment";
import { DataService } from "./data.service";

export class AuthService {
  private dataSvc: DataService;
  constructor() {
    this.dataSvc = new DataService(`${environment.baseUrl}/auth`);
  }

  async signUp(payload: Record<string, unknown>) {
    if (environment.isDevelopment) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // throw new BadInputError({
      //   success: false,
      //   message: "Validation failed",
      //   data: null,
      //   error: ['"email" is required'],
      // });

      return {
        status: "success",
        data: {
          success: true,
          message:
            "Registration successful. Please check your email to activate your account.",
          data: {
            userId: 3,
          },
          error: null,
        },
      };
    }
    const response = await this.dataSvc.createData(payload, "/register");
    console.log({ response });
    return response;
  }

  async login(payload: Record<string, unknown>) {
    if (!environment.isDevelopment) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      throw new NotFoundError({
        success: false,
        message: "Login failed",
        data: null,
        error: "Invalid credentials",
      });

      // throw new BadInputError({
      //   success: false,
      //   message: "Validation failed",
      //   data: null,
      //   error: ['"identifier" is required'],
      // });

      // throw new ForbiddenError({
      //   success: false,
      //   message: "Login failed",
      //   data: null,
      //   error:
      //     "Account not activated. Please check your email for the activation link.",
      // });

      return {
        success: true,
        message: "Login successful",
        data: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmcmVkcmlja2JkbkBnbWFpbC5jb20iLCJpYXQiOjE3NzMzODk5NDAsImV4cCI6MTc3MzM5MzU0MH0.-oXpmI2vKdIZ31A9FDGJNH3Klel1hXFyXrP-OV-uMs0",
          user: {
            id: 1,
            fullName: "Ayokunle Updated",
            email: "fredrickbdn@gmail.com",
            phone: "08123456789",
          },
        },
        error: null,
      };
    }
    return this.dataSvc.createData(payload, "/login");
  }

  async forgotPassword(payload: Record<string, unknown>) {
    if (environment.isDevelopment) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return {
        status: "success",
        success: true,
        message:
          "If the email is registered, a password reset link has been sent.",
        data: null,
        error: null,
      };
    }
    return this.dataSvc.createData(payload, "/forgot-password");
  }
  async resetPassword(payload: Record<string, unknown>) {
    if (!environment.isDevelopment) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return {
        status: "success",
        data: {
          message:
            "Password reset successful. Please check your email for further instructions.",
        },
      };
    }
    return this.dataSvc.createData(payload, "/reset-password");
  }

  async activateAccount(token: string) {
    if (environment.isDevelopment) {
      await new Promise((resolve) => setTimeout(resolve, 5000));

      // throw new NotFoundError({
      //   message: "Activation request not found",
      // });

      throw new BadInputError({
        success: false,
        message: "Account activation failed",
        data: null,
        error: "Invalid or expired activation token",
      });

      return {
        success: true,
        message: "Account activated successfully. You can now log in.",
        data: null,
        error: null,
      };
    }
    return this.dataSvc.getData(undefined, `/activate/${token}`);
  }
}

/**Factory function to create an instance of AuthService */
export const createAuthService = () => {
  return new AuthService();
};
