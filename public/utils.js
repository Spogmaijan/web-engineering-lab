export function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

export function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}