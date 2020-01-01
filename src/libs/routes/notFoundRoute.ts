export default function notFoundRoute(req, res, next) {
  console.log('Inside Route function');
  next({ Error: 'Not found' });
}
