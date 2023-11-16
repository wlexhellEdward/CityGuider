export const refactorString = (str: string) => {
  if (str != undefined) {
    return str.length > 20 ? str.substring(0, 20) + "..." : str;
  }
};
