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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const constructApiUrl = (baseUrl: string, params: any = {}) => {
  const searchParams = new URLSearchParams();

  // Loop through the params object and add each parameter to the URL
  for (const key in params) {
    // eslint-disable-next-line no-prototype-builtins
    if (params?.hasOwnProperty(key) && params[key] !== undefined) {
      searchParams.append(key, params[key]);
    }
  }

  // Use the URLSearchParams toString method to get the query string
  const queryString = searchParams.toString();

  // Construct the full URL
  const apiUrl = `${baseUrl}${queryString ? `?${queryString}` : ""}`;

  return apiUrl;
};

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

  async getData(query?: Record<string, unknown>, urlParam?: string) {
    try {
      const response = await axiosInstance.get(
        constructApiUrl(`${this.url}${urlParam || ""}`, query),
      );
      return response.data;
    } catch (error) {
      log({ "DataService.getData error": error });
      this.handleError(error);
    }
  }

  handleError(error: unknown) {
    // log({ "Error! ": error }, "error");
    console.log({ "handleError! ": error });

    if (axios.isAxiosError(error)) {
      // log({ Axios: error }, "error");
      console.log({ Axios: error });
      if (error.response) {
        switch (error.response.status) {
          case 400:
            throw new BadInputError({
              ...error,
              message:
                error.response?.data?.message || error.message || "Bad Request",
              data: error.response?.data,
              error: error.response?.data?.error,
            });
          case 401:
            throw new UnauthorizedError({
              ...error,
              message:
                error.response?.data?.message ||
                error.message ||
                "Unauthorized",
              data: error.response?.data,
              error: error.response?.data?.error,
            });
          case 403:
            throw new ForbiddenError({
              ...error,
              message:
                error.response?.data?.message || error.message || "Forbidden",
              data: error.response?.data,
              error: error.response?.data?.error,
            });
          case 404:
            throw new NotFoundError({
              ...error,
              message:
                error.response?.data?.message || error.message || "Not Found",
              data: error.response?.data,
              error: error.response?.data?.error,
            });
          case 409:
            throw new ConflictError({
              ...error,
              message:
                error.response?.data?.message || error.message || "Conflict",
              data: error.response?.data,
              error: error.response?.data?.error,
            });
          case 429:
            throw new TooManyRequestsError({
              ...error,
              message:
                error.response?.data?.message ||
                error.message ||
                "Too many request",
              data: error.response?.data,
              error: error.response?.data?.error,
            });
          default:
            throw new AppError({
              ...error,
              message:
                error.response?.data?.message ||
                error.message ||
                "An unexpected error occurred",
              data: error.response?.data,
              error: error.response?.data?.error,
            });
        }
      }
    }

    if (error instanceof ApiError) {
      // log({ ApiError: error }, "error");
      console.log({ ApiError: error });
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
