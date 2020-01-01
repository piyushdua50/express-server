const getUser = "getUsers";
const HeadTrainer = "head-trainer";
const Trainee = "trainee";
const Trainer = "trainer";

export const permissions = {
  [getUser]: {
    all: [HeadTrainer],
    read: [Trainee, Trainer],
    write: [Trainer],
    delete: []
  }
};
