import { PERMISSIONS } from './constants';
export default function hasPermission(
  moduleName: string,
  role: string,
  permissionType: string,
): boolean {
  if (PERMISSIONS[moduleName]) {
    if (
      PERMISSIONS[moduleName][permissionType].includes(role) ||
      PERMISSIONS[moduleName].all.includes(role)
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
