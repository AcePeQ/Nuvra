export function splitItemsBySize(items: any[], size: number) {
  const array = [];

  for (let i = 0; i < items.length; i += size) {
    array.push(items.slice(i, i + size));
  }

  return array;
}
