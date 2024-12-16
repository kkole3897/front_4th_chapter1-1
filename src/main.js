import { HistoryRouter } from "@/shared/lib/router";
import { LoginPage } from "@/pages/login-page";
import { MainPage } from "@/pages/main-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { ProfilePage } from "@/pages/profile-page";
import { Viewer } from "./entities/viewer";

const router = HistoryRouter;
const root = document.getElementById("root");
router.addRoute("/", () => {
  new MainPage(root).render();
});
router.addRoute("/login", () => {
  new LoginPage(root).render();
});
router.addRoute("/profile", () => {
  const viewer = new Viewer();

  if (viewer.isAuthenticated) {
    new ProfilePage(root).render();
    return;
  }

  router.replace("/login");
});
router.addRoute("/404", () => {
  new NotFoundPage(root).render();
});
router.addRoute("*", () => {
  router.replace("/404");
});
router.init();
