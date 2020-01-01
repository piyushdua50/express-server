export interface IPermissions {
  [trainee: string]: {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
  };
}
