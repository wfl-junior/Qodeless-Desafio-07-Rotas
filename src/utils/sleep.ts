export function sleep(timeInMilliseconds: number) {
  return new Promise(resolve => {
    setTimeout(resolve, timeInMilliseconds);
  });
}
