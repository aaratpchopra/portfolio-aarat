const array = [4, 2, 1, 3];
let cost = 0;

for (let i = 0; i < array.length - 1; i++) {
  let minIndex = Number.MAX_VALUE;
  for (let j = i; j < array.length; j++) {
    if (minIndex > array[j]) {
      minIndex = j;
    }
  }
  let temp = array[i];
  array[i] = array[minIndex];
  array[minIndex] = temp;
  cost++;
}

export default {};
