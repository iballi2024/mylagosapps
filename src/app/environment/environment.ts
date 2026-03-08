export const environment = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "/api/v1",
  isProduction: process.env.NEXT_NODE_ENV === "production",
  isDevelopment: process.env.NEXT_NODE_ENV === "development",
  isStaging: process.env.NEXT_NODE_ENV === "staging",
  storageSecretKey: process.env.NEXT_STORAGE_SECRET_KEY,
  paystackPublicKey: process.env.NEXT_PAYSTACK_PUBLIC_KEY,
  paystackSecretKey: process.env.NEXT_PAYSTACK_SECRET_KEY,
};
