import axios from "axios";
import { log } from "../helpers/logInConsole";
import {
  ApiError,
  AppError,
  BadInputError,
  ConflictError,
  ForbiddenError,
  NotFoundError,
  TooManyRequestsError,
  UnauthorizedError,
} from "../common";
import axiosInstance from "../interceptors/axiosInstance";

export class DataService {
  private url: string;
  constructor(url: string) {
    this.url = url;
  }

  async createData(payload: Record<string, unknown>, urlParam?: string) {
    try {
      const response = await axiosInstance.post(
        `${this.url}${urlParam || ""}`,
        payload,
      );
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error: unknown) {
    log({ "Error! ": error }, "error");

    if (axios.isAxiosError(error)) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            throw new BadInputError({
              ...error,
              message:
                error.response?.data?.message || error.message || "Bad Request",
            });
          case 401:
            throw new UnauthorizedError({
              ...error,
              message:
                error.response?.data?.message ||
                error.message ||
                "Unauthorized",
            });
          case 403:
            throw new ForbiddenError({
              ...error,
              message:
                error.response?.data?.message || error.message || "Forbidden",
            });
          case 404:
            throw new NotFoundError({
              ...error,
              message:
                error.response?.data?.message || error.message || "Not Found",
            });
          case 409:
            throw new ConflictError({
              ...error,
              message:
                error.response?.data?.message || error.message || "Conflict",
            });
          case 429:
            throw new TooManyRequestsError({
              ...error,
              message:
                error.response?.data?.message ||
                error.message ||
                "Too many request",
            });
          default:
            throw new AppError({
              ...error,
              message:
                error.response?.data?.message ||
                error.message ||
                "An unexpected error occurred",
            });
        }
      }
    }

    if (error instanceof ApiError) {
      log({ ApiError: error }, "error");
      if (error.statusCode === 400) {
        throw new BadInputError({
          ...error,
          message: error.message || "Bad Request",
        });
      }
      if (error.statusCode === 401) {
        throw new UnauthorizedError({
          ...error,
          message: error.message || "Unauthorized",
        });
      }
      if (error.statusCode === 403) {
        throw new ForbiddenError({
          ...error,
          message: error.message || "Forbidden",
        });
      }
      if (error.statusCode === 404) {
        throw new NotFoundError({
          ...error,
          message: error.message || "Not Found",
        });
      }
      if (error.statusCode === 409) {
        throw new ConflictError({
          ...error,
          message: error.message || "Conflict",
        });
      }
      if (error.statusCode === 429) {
        throw new TooManyRequestsError({
          ...error,
          message: error.message || "Too many request",
        });
      }
      throw new AppError({
        ...error,
        message: error.message || "An unexpected error occurred",
      });
    }

    if (error instanceof Error) {
      throw error;
    }
    throw new AppError("An unknown error occurred");
  }
}
