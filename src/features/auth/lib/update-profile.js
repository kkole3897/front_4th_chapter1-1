import { Viewer } from "@/entities/viewer";

export function updateProfile(data) {
  const viewer = new Viewer();

  viewer.update(data);
}
