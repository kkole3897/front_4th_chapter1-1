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
      this.id = null;
      this.password = null;
    } else {
      const parsedViewer = JSON.parse(rawViewer);

      this.id = parsedViewer.id;
      this.password = parsedViewer.password;
    }
  }

  get isAuthenticated() {
    return this.id != null && this.password != null;
  }

  validate(data) {
    if (data.id == null && data.password == null) {
      return false;
    }

    return true;
  }

  setData(data) {
    if (this.validate(data)) {
      throw InvalidViewerError(
        `Invalid identifier(${data.identifier}) or password(${data.password})`,
      );
    }

    this.id = data.id;
    this.password = data.password;

    localStorage.setItem(VIEWER_KEY, JSON.stringify(data));
  }
}
