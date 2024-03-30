import { v5 as uuidv5, v4 as uuidv4 } from "uuid";

const nameSpaces = {};

export const generateKey = (name, componentType) => {
  if (!nameSpaces[componentType]) {
    nameSpaces[componentType] = uuidv4(componentType);
  }
  return uuidv5(name, nameSpaces[componentType]);
};
