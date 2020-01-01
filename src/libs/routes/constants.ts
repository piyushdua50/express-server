import { IPermissions } from './interfaces';
export const TRAINEE1: string = 'trainee1';
export const TRAINEE: string = 'trainee';
export const HEADTRAINER: string = 'head-trainer';
export const TRAINER: string = 'trainer';

export const PERMISSIONS: IPermissions = {
  TRAINEE1: {
    all: [HEADTRAINER],
    delete: [],
    read: [TRAINEE, TRAINER],
    write: [HEADTRAINER],
  },
};
