export const environment = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "/api/v1",
  isProduction: process.env.NEXT_NODE_ENV === "production",
  isDevelopment: process.env.NEXT_NODE_ENV === "development",
  isStaging: process.env.NEXT_NODE_ENV === "staging",
  storageSecretKey: process.env.NEXT_STORAGE_SECRET_KEY,
  paystack: {
    publicKey: process.env.NEXT_PAYSTACK_PUBLIC_KEY,
    secretKey: process.env.NEXT_PAYSTACK_SECRET_KEY,
  },
};
