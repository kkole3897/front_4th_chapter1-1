class InvalidViewerError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidViewerError";
  }
}

const VIEWER_KEY = "viewer";

export class Viewer {
  constructor() {
    const rawViewer = localStorage.getItem(VIEWER_KEY);

    if (!rawViewer) {
      this.email = null;
      this.password = null;
      this.name = null;
      this.description = null;
    } else {
      const parsedViewer = JSON.parse(rawViewer);

      this.email = parsedViewer.email;
      this.password = parsedViewer.password;
      this.name = rawViewer.name ?? "";
      this.description = rawViewer.description ?? "";
    }
  }

  get isAuthenticated() {
    return this.email != null && this.password != null;
  }

  validate(data) {
    if (data.email == null && data.password == null) {
      return false;
    }

    return true;
  }

  setData(data) {
    if (this.validate(data)) {
      throw InvalidViewerError(
        `Invalid email(${data.email}) or password(${data.password})`,
      );
    }

    this.email = data.email;
    this.password = data.password;
    this.name = data.name;
    this.description = data.description;

    localStorage.setItem(VIEWER_KEY, JSON.stringify(data));
  }
}
