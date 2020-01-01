export function validateEmail(email: string): boolean {
  let regex = /^\w+([\.-]?\w+)*@successive.tech/;
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}
