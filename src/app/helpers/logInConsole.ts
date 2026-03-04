import { environment } from "../environment/environment";

export const logInConsole = (...args: unknown[]) => {
  if (environment.isDevelopment) {
    console.log(...args);
  }
};

type LogLevel = "log" | "warn" | "error" | "info";

function getCallerInfo() {
  const error = new Error();
  const stack = error.stack?.split("\n") || [];

  // Adjust index if needed (depends on environment)
  const callerLine = stack[3] || stack[2] || "";

  const match =
    callerLine.match(/\((.*):(\d+):(\d+)\)/) ||
    callerLine.match(/at (.*):(\d+):(\d+)/);

  if (!match) {
    return { file: "unknown", line: "unknown" };
  }

  return {
    file: match[1].split("/").pop(),
    line: match[2],
  };
}

export function log(message: unknown, label = "", level: LogLevel = "log") {
  if (environment.isDevelopment) {
    const { file, line } = getCallerInfo();
    const prefix = `[${file}:${line}]${label ? ` [${label}]` : ""}`;

    console[level](prefix, message);
  }
}

export const debugLog = (data: unknown) => {
  if (environment.isDevelopment) {
    const stack = new Error().stack?.split("\n")[2] || "";
    const match = stack.match(/(.*):(\d+):(\d+)/);

    const file = match?.[1]?.split("/").pop() ?? "unknown";
    const line = match?.[2] ?? "?";

    console.log(`[${file}:${line}]`, data);
  }
};
