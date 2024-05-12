function deepMerge(
  obj1: Record<string, any>,
  obj2: Record<string, any>
): object {
  const result: Record<string, any> = {};

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (
        typeof obj2[key] === "object" &&
        obj1.hasOwnProperty(key) &&
        typeof obj1[key] === "object"
      ) {
        result[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key) && !result.hasOwnProperty(key)) {
      if (typeof obj1[key] === "object") {
        result[key] = deepMerge(obj1[key], {});
      } else {
        result[key] = obj1[key];
      }
    }
  }

  return result;
}

export default deepMerge;
