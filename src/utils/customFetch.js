let is_stock = true;

let customFetch = (time, task) => {
  return new Promise((resolve, reject) => {
    if (is_stock) {
      setTimeout(() => {
        resolve(task);
      }, time);
    } else {
      reject("Error in the customFetch: ");
    }
  });
};

export default customFetch;
