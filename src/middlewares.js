export const requestTime = (req, res, next) => {
  res.requestTime = Date.now();
  next();
};

export const logger = (req, res, next) => {
  console.log(`Date request logger: ${res.requestTime}`);
};
