import { UserType } from "@/packages/constants/user";

export const getRoleType = (type: number | undefined | null) => {
  switch (type) {
    case UserType.Admin:
      return "admin";
    case UserType.User:
      return "user";
    default:
      return "user";
  }
};
