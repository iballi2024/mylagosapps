import { BadInputError, NotFoundError } from "../common";
import { environment } from "../environment/environment";
import { DataService } from "./data.service";

export class AuthService {
  private dataSvc: DataService;
  constructor() {
    this.dataSvc = new DataService(`${environment.baseUrl}/auth`);
  }

  async signUp(payload: Record<string, unknown>) {
    if (!environment.isDevelopment) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
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
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return {
        status: "success",
        data: {
          userId: "123456789",
          token: "123456789",
          message: "Login successful",
        },
      };
    }
    return this.dataSvc.createData(payload, "/login");
  }

  async forgotPassword(payload: Record<string, unknown>) {
    if (!environment.isDevelopment) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return {
        status: "success",
        "success": true,
        "message": "If the email is registered, a password reset link has been sent.",
        "data": null,
        "error": null
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
          message: "Password reset successful. Please check your email for further instructions.",
        },
      };
    }
    return this.dataSvc.createData(payload, "/reset-password");
  }


  async activateAccount(token: string) {
    if (environment.isDevelopment) {
      await new Promise((resolve) => setTimeout(resolve, 3000));

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
