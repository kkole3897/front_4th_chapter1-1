import { Users } from "@/entities/user";
import { Viewer } from "@/entities/viewer";

export const signUpLocal = (data) => {
  const users = new Users();
  const viewer = new Viewer();

  users.addUser(data);
  viewer.login(data);
};
