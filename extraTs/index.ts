import { IUsers } from "./interfaces";
import { Diamond, Equilateral } from "./patterns";
import { validateUsers, hasPermission } from "./utils";

Diamond(5);
Diamond(10);

Equilateral(5);
Equilateral(10);

hasPermission("GETUSER", "trainee", "all");
hasPermission("GETUSER", "head-trainer", "write");

const users: IUsers[] = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },
  {
    traineeEmail: "trainee2@suc.tech",
    reviewerEmail: "reviewer2@success.tech"
  },
  {
    traineeEmail: "trainee3@successive.tech",
    reviewerEmail: "reviewer3@successive.tech"
  }
];

validateUsers(users);
