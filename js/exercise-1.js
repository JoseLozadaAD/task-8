const coins = [1, 2, 5, 10, 20, 50, 100, 200];

const countCombinations = (ticket) => {
  if (ticket < 1 || ticket > 10000) {
    return '';
  }

  let combinations = Array(ticket + 1).fill(0);
  combinations[0] = 1;

  coins.forEach((coin) => {
    for (let j = coin; j <= ticket; j++) {
      combinations[j] += combinations[j - coin];
    }
  });

  return combinations[ticket];
};

console.log(countCombinations(10)); // Output: 4
console.log(countCombinations(0)); // Output:

/*
const coins = [1, 2, 5, 10, 20, 50, 100, 200];

let combinations = 0;
const bruteForce = (currentPrice, currentCoins, position) => {
  if (currentPrice === 0) {
    combinations += 1;
    return;
  }

  if (position < 0) {
    return;
  }

  let currentCoin = currentCoins[position];

  if (!currentCoin) {
    return;
  }

  if (currentPrice < 0) {
    return;
  }

  bruteForce(currentPrice - currentCoin, currentCoins, position);
};

const getCombinations = (price) => {
  if (price >= 1 && price <= 10000) {
    combinations = 0;
    const availableCoins = coins.filter((coin) => coin <= price);

    for (let i = availableCoins.length; i > 0; i -= 1) {
      bruteForce(price, availableCoins, i - 1);
      bruteForce(price - availableCoins[i - 1], availableCoins, i - 2);
    }
  }

  console.log(combinations);

  return '';
};

getCombinations(5);
*/
