// const tryCatch = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// };

// export default tryCatch;


const tryCatch = (fn) => {
  return function WrappedComponent(...args) {
    try {
      return fn(...args);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
};

export default tryCatch;
