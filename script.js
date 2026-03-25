function delayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}

const promises = [
  delayedPromise("A", 1000),
  delayedPromise("B", 2000),
  delayedPromise("C", 1500),
  delayedPromise("D", 3000),
  delayedPromise("E", 2500),
];

Promise.all(promises).then((results) => {
  console.log("All:", results);
});

function randomDelay(value) {
  const delay = Math.floor(Math.random() * 4000) + 1000;
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}

const racePromises = [
  randomDelay("A"),
  randomDelay("B"),
  randomDelay("C"),
  randomDelay("D"),
  randomDelay("E"),
];

Promise.race(racePromises).then((result) => {
  console.log("Fastest:", result);
});
