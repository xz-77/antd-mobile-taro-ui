// 强化Error对象
const enhanceError = (error: Error, message: string, code?: number) => {
  if (code) {
    Object.assign(error, { code });
  }
  if (message) {
    Object.assign(error, { message });
  }
  return error;
};

// 创建Error对象
export const createError = (message: string, code?: number) => {
  const error = new Error(message);
  return enhanceError(error, message, code);
};
