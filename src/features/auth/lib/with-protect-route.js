import { Viewer } from "@/entities/viewer";
import { HistoryRouter } from "@/shared/lib/router";

export const withProtectRoute = (handler) => {
  const viewer = new Viewer();

  if (!viewer.isAuthenticated) {
    return () => HistoryRouter.replace("/login");
  }

  return handler;
};
