import { PERMISSIONS } from "../constants";

export default function hasPermission(
  moduleName: string,
  role: string,
  permissionType: string
): void {
  if (PERMISSIONS[moduleName]) {
    if (
      PERMISSIONS[moduleName][permissionType].includes(role) ||
      PERMISSIONS[moduleName]["all"].includes(role)
    ) {
      console.log(
        `${role} have the ${permissionType} permission for the module ${moduleName}`
      );
    } else {
      console.log(
        `${role} do not have the ${permissionType} permission for the module ${moduleName}`
      );
    }
  } else {
    console.log(
      `${role} do not have the ${permissionType} permission for the module ${moduleName}`
    );
  }
}
