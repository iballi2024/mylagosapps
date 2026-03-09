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
          userId: "123456789",
          token: "123456789",
          message: "Sign up successful*",
        },
      };
    }
    return this.dataSvc.createData(payload);
  }
}

/**Factory function to create an instance of AuthService */
export const createAuthService = () => {
  return new AuthService();
};
