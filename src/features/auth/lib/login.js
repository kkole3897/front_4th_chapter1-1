import { Viewer } from "@/entities/viewer";

export const loginLocal = (data) => {
  const viewer = new Viewer();

  viewer.login(data);
};
