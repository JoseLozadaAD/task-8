const findNbonacciNumber = (N, M) => {
  if (N <= 0 || M <= 0) {
    return 0;
  }

  let series = Array.from({ length: N }, (_, index) => (index < N - 1 ? 0 : 1));

  for (let i = N; i < M; i++) {
    let sum = series.slice(i - N, i).reduce((acc, val) => acc + val, 0);
    series.push(sum);
  }

  return series[M - 1];
};

console.log(findNbonacciNumber(2, 5)); // Output: 3
console.log(findNbonacciNumber(3, 7)); // Output: 7
console.log(findNbonacciNumber(0, 0)); // Output: 0
