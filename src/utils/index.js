let keys = [];

export const generateKey = (componentType) => {
  const key = componentType + "_" + Math.random().toString(16).slice(2);
  if (keys.includes(key)) {
    return generateKey(componentType);
  }
  keys.push(key);
  return key;
};
