export const fibonacci = (num: number): number => {
  console.log(num);
  if (num <= 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};
