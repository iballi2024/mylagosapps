import { NotFoundError } from "../common";
import { environment } from "../environment/environment";
import { DataService } from "./data.service";

export class AuthService {
  private dataSvc: DataService;
  constructor() {
    this.dataSvc = new DataService("");
  }

  async signUp(payload: Record<string, unknown>) {
    if (environment.isDevelopment) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return {
        status: "success",
        data: {
          // userId: "123456789",
          // token: "123456789",
          message: "Account created successfully. Please check your email to verify your account.",
        },
      };
    }
    return this.dataSvc.createData(payload);
  }

  async login(payload: Record<string, unknown>) {
    if (environment.isDevelopment) {
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
    return this.dataSvc.createData(payload);
  }

  async activateAccount(token: string) {
    if (environment.isDevelopment) {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      throw new NotFoundError({
        message: "Activation token not found",
      });


      return {
        status: "success",
        data: {
          userId: "123456789",
          token: "123456789",
          message: "Login successful",
        },
      };
    }
    return this.dataSvc.getData(undefined, token);
  }
}

/**Factory function to create an instance of AuthService */
export const createAuthService = () => {
  return new AuthService();
};
