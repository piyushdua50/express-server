import { IUsers } from "./../interfaces";
import { validateEmail } from "./helpers";

export default function validateUsers(users: IUsers[]): void {
  const valid_users: string[] = [];
  const Invalid_users: string[] = [];

  users.forEach(function(user_email: IUsers, index: number): void {
    const { traineeEmail, reviewerEmail } = user_email;
    if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
      valid_users.push(`User-${index + 1}`);
    } else {
      Invalid_users.push(`User-${index + 1}`);
    }
  });

  console.log(`Number of Valid users are - ${valid_users.length}`);
  console.log(valid_users);
  console.log(`\n Number of Invalid users are - ${Invalid_users.length}`);
  console.log(Invalid_users);
}
