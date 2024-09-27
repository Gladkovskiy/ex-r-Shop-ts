export const date = new Date()
  .toLocaleString()
  .split(',')[0]
  .replace(/\./gi, '-')
