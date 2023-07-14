module.exports = function isHappyNumber(number) {
  let num = number;
  const seenNumbers = new Set();

  while (num !== 1 && !seenNumbers.has(num)) {
    seenNumbers.add(num);
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    num = sum;
  }

  return num === 1;
}