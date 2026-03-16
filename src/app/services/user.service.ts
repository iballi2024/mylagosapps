import { UnauthorizedError } from "../common";
import { environment } from "../environment/environment";
import { DataService } from "./data.service";

export class UserService {
  private dataSvc: DataService;
  constructor() {
    this.dataSvc = new DataService(`${environment.baseUrl}/app/profile`);
  }

  async getCurrentUser() {
    if (!environment.isDevelopment) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // throw new UnauthorizedError({
      //   success: false,
      //   message: "User not found",
      //   data: null,
      //   error: "Invalid credentials",
      // });

      return {
        success: true,
        message: "User retrieved successfully",
        data: {
          id: 1,
          fullName: "Ayokunle Updated",
          email: "fredrickbdn@gmail.com",
          phone: "08123456789",
        },
        error: null,
      };
    }
    return await this.dataSvc.getData(undefined, "/");
  }
}

export function createUserService() {
  return new UserService();
}
