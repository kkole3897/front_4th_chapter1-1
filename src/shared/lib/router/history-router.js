const DEFAULT_PATH = "*";

export const HistoryRouter = (function () {
  const routes = {};

  function addRoute(path, handler) {
    routes[path] = handler;
  }

  function push(path) {
    history.pushState(null, "", path);
    handleRoute(path);
  }

  function handleRoute(path) {
    const handler = routes[path];
    if (handler) {
      handler();
    } else {
      routes[DEFAULT_PATH]?.();
    }
  }

  function handlePopState() {
    handleRoute(window.location.pathname);
  }

  function init() {
    window.addEventListener("popstate", handlePopState);
    push(window.location.pathname);
  }

  return {
    init,
    push,
    addRoute,
  };
})();
