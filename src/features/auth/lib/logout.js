import { Viewer } from "@/entities/viewer";

export const logout = () => {
  const viewer = new Viewer();

  viewer.logout();
};
