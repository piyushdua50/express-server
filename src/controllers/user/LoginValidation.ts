const LoginValidation = {
    create: {
      Emailid: {
        errorMessage: 'EmailId is required',
        in: ['body'],
        regex: /^\w+([\.-]?\w+)*@gmail.com/,
        required: true,
        string: true,
      },
      Password: {
        errorMessage: 'Password is required',
        in: ['body'],
        required: true,
      },
    },
    delete: {
      originalId: {
        errorMessage: 'Id is required',
        in: ['params'],
        required: true,
      },
    },
    get: {
      limit: {
        default: 10,
        errorMessage: 'Limit is invalid',
        in: ['query'],
        number: true,
        required: false,
      },
      skip: {
        default: 0,
        errorMessage: 'Skip is invalid',
        in: ['query'],
        number: true,
        required: false,
      },
    },
    update: {
      dataToUpdate: {
        custom: () => {
          console.log('This is a custom function');
        },
        in: ['body'],
        isObject: true,
        required: true,
      },
      id: {
        in: ['body'],
        required: true,
        string: true,
      },
      },
  };
export default LoginValidation;
