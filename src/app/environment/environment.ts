export const environment = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "/api/v1",
  isProduction: process.env.NEXT_PUBLIC_NODE_ENV === "production",
  isDevelopment: process.env.NEXT_PUBLIC_NODE_ENV === "development",
  isStaging: process.env.NEXT_PUBLIC_NODE_ENV === "staging",
  paystack: {
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
    secretKey: process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY,
  },
  tokenKey: process.env.NEXT_PUBLIC_TOKEN_KEY || "token",
};
