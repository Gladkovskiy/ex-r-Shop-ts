export const toUpperCase = (str: string) =>
  str.replace(/( |^)[а-яёa-z]/g, x => x.toUpperCase())
