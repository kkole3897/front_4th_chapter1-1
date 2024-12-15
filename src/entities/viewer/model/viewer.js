const VIEWER_KEY = "user";

class InvalidFieldError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidFieldError";
  }
}

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

  validate(data) {
    if (data.username == null || data.username.length === 0) {
      throw new InvalidFieldError(`username field is required`);
    }
  }

  login(data) {
    this.validate(data);

    this.viewer = { username: data.username, email: "", bio: "" };

    localStorage.setItem(VIEWER_KEY, JSON.stringify(this.viewer));
  }
}
