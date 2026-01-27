export function returnUniqueRandomItems(min, max, array, loops) {
  if (!array || !min || !max) return;
  const currentItemIndexes = [];
  const itemsArray = [];

  if (array) {
    const arrayLength = array.length - 1;

    for (let i = 0; i < loops; i++) {
      let randomIndex = getRandomNumber(min, arrayLength);

      if (currentItemIndexes.includes(randomIndex)) {
        while (!currentItemIndexes.includes(randomIndex)) {
          randomIndex = getRandomNumber(min, arrayLength);
        }
      }

      itemsArray.push(array[randomIndex]);
      currentItemIndexes.push(randomIndex);
    }

    return itemsArray;
  }

  for (let i = 0; i < loops; i++) {
    let randomIndex = getRandomNumber(min, max);

    if (currentItemIndexes.includes(randomIndex)) {
      while (!currentItemIndexes.includes(randomIndex)) {
        randomIndex = getRandomNumber(min, max);
      }
    }

    itemsArray.push(array[randomIndex]);
    currentItemIndexes.push(randomIndex);
  }

  return itemsArray;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
