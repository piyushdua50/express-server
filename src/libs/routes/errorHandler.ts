export default function errorHandler(err, req, res, next) {
  console.log('Inside Error Handler function');
  const status = err.status || 800;
  const message = err.message || 'error';
  const error = err.error || 'Not Found';
  const timestamp = new Date();
  res.send({ error, message, status, timestamp });
}
