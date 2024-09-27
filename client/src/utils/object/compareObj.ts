export const compareObj = (obj1: Object, obj2: Object): boolean =>
  JSON.stringify(obj1) === JSON.stringify(obj2)
