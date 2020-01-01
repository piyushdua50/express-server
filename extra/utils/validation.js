import { validateEmail } from "./helpers";

export default function validateUsers(users) {
  const valid_users = [];
  const Invalid_users = [];

  users.forEach(function(user_email, index) {
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
