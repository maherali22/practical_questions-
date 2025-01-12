const tryCatch = (fn) => {
  return function WrappedComponent(...args) {
    try {
      return fn(...args);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      console.log("Finally block executed");
    }
  };
};

export default tryCatch;
