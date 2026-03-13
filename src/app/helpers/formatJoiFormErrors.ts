export const formatJoiFormErrors = (errors: string | string[]) => {
  console.warn({ formatJoiFormErrors: errors });
  const errorArray = typeof errors === "string" ? [errors] : errors;
  return errorArray.map((err) => err.replace(/"/g, ""));
};
