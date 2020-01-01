import { IPermissions } from "./interfaces";
export const GETUSER: string = "getUser";
export const SETUSER: string = "setUser";
export const HEADTRAINER: string = "head-trainer";
export const TRAINEE: string = "trainee";
export const TRAINER: string = "trainer";

export const PERMISSIONS: IPermissions = {
  GETUSER: {
    all: [HEADTRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  },
  SETUSER: {
    all: [HEADTRAINER],
    read: [TRAINEE, TRAINER],
    write: [TRAINER],
    delete: []
  }
};
