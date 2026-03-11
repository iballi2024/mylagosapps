export const formatJoiFormErrors = (errors: string | string[]) => {
  const errorArray = typeof errors === "string" ? [errors] : errors;
  return errorArray.map((err) => err.replace(/"/g, ""));
};
