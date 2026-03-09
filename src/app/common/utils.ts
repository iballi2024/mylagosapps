export const shortenString = (param: string = "", length = 15) => {
  if (!param) return param;
  if (param?.length > length) {
    return param.substring(0, length) + "...";
  }
  return param;
};
