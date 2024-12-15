import { HistoryRouter } from "@/shared/lib/router";
import { LoginPage } from "@/pages/login-page";
import { MainPage } from "@/pages/main-page";
import { ErrorPage } from "@/pages/error-page";
import { ProfilePage } from "@/pages/profile-page";

const router = HistoryRouter;
const root = document.getElementById("root");
router.addRoute("/", () => {
  new MainPage(root).render();
});
router.addRoute("/login", () => {
  new LoginPage(root).render();
});
router.addRoute("/profile", () => {
  new ProfilePage(root).render();
});
router.addRoute("/404", () => {
  new ErrorPage(root).render();
});
router.addRoute("*", () => {
  router.replace("/404");
});
router.init();
