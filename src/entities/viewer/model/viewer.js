const VIEWER_KEY = "user";

export class Viewer {
  constructor() {
    const rawViewer = localStorage.getItem(VIEWER_KEY);

    if (!rawViewer) {
      this.viewer = null;
    } else {
      const parsedViewer = JSON.parse(rawViewer);

      this.viewer = parsedViewer;
    }
  }

  get isAuthenticated() {
    return this.viewer != null;
  }

  login(data) {
    this.viewer = data;

    localStorage.setItem(VIEWER_KEY, JSON.stringify(data));
  }
}
