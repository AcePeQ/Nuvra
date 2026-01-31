export function returnUniqueRandomItems(min, array, loops) {
  if (!Array.isArray(array) || loops <= 0) return [];
  if (min === null || min === undefined) return [];

  const currentItemIndexes = [];
  const itemsArray = [];

  const arrayLength = array.length - 1;

  for (let i = 0; i < loops; i++) {
    let randomIndex = getRandomNumber(min, arrayLength);

    if (currentItemIndexes.includes(randomIndex)) {
      while (currentItemIndexes.includes(randomIndex)) {
        randomIndex = getRandomNumber(min, arrayLength);
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

export function formatProductName(name) {
  const splittedName = name.split("-");

  const formatedName = splittedName.map(
    (element) => element[0].toUpperCase() + element.slice(1),
  );

  return formatedName.join(" ");
}
