function validationHandler(config) {
  return ((req, res, next) => {
    const keyvalue = Object.keys(config);
    keyvalue.forEach((key) => {
      const items = config[key];
      let values = items.in.map((item) => {
        return req[item][key];
      });

      if (items && items.required) {
        const variable = values.filter((item) => item);
        if (variable.length !== values.length) {
          next({
            message: items.errorMessage || `${key} is required`,
            status: 'Bad Request',
          });
        }
      }
      if (items && !items.required) {
        const variable = values.filter((item) => item);
        if (isNaN(values)) {
          console.log('Not a number');
          next({
            message: items.errorMessage || `${key} is required`,
            status: 'Bad request',
          });
        }
      } else {
        if (values === '') {
          values = items.default;
        } else {
          console.log(key, '=', values);
        }
      }

      if (items && items.string) {
        const variable = values.filter((item) => item);
        if (typeof variable[0] !== 'string') {
          next({
            message: `${key} should be string` || 'Error Occurred',
            status: 'Bad Request',
          });
        }
      }

      if (items && items.regex) {
        const variable = values.filter((item) => item);
        const regex = items.regex;
        if (!regex.test(variable[0])) {
          next({
            message: `${key} is Invalid` || 'Error Occurred',
            status: 'Bad Request',
          });
        }
      }

      if (items && items.isObject) {
        const variable = values.filter((item) => item);
        if (typeof variable[0] !== 'object') {
          next({
            message: `${key} should be object` || 'Error Occurred',
            status: 'Bad Request',
          });
        }
      }

      if (items && items.custom) {
        items.custom(values);
      }
    });
    next();
  });
}

export default validationHandler;
