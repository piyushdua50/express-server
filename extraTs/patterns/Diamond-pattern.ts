export default function Diamond(n: number): void {
  let flag: number = 0;
  let i: number, j: number;
  console.log(`Print a diamond with rows ${n}`);
  for (i = 1; i <= n; i++) {
    let pattern: string = "";
    for (j = 1; j <= 2 * n - 1; j++) {
      if (j >= n + 1 - i && j <= n - 1 + i && flag == 0) {
        pattern += "*";
        flag = 1;
      } else {
        pattern += " ";
        flag = 0;
      }
    }
    console.log(pattern);
  }

  flag = 0;
  for (i = 1; i <= n; i++) {
    let pattern: string = "";
    for (j = 1; j <= 2 * n - 1; j++) {
      if (j >= i && j <= 2 * n - i && flag == 0) {
        pattern += "*";
        flag = 1;
      } else {
        pattern += " ";
        flag = 0;
      }
    }
    console.log(pattern);
  }
}
