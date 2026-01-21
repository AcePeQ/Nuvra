function errorMiddleware(error, req, res, next) {
  const status = error.status ? error.status : 500;
  const message = status === 500 ? "Internal Server Error: 500" : error.message;
  const errors = error.error;

  res.status(status).json({ status, message, error: errors });
}

export default errorMiddleware;
