const throttle = (func, ms = 50, context = window) => {
  let timer;
  let wait = false;
  return (...args) => {
    let later = () => {
      func.apply(context, args);
    };
    if (!wait) {
      later();
      wait = true;
      clearTimeout(timer)
      timer = setTimeout(() => {
        wait = false;
      }, ms);
    }
  };
};

export default throttle;