const USERS_KEY = "users";

class InvalidUserError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidUserError";
  }
}

export class Users {
  constructor() {
    const rawUsers = localStorage.getItem(USERS_KEY);

    if (!rawUsers) {
      this.users = [];
    } else {
      this.users = JSON.parse(rawUsers);
    }
  }

  validateUser(user) {
    if (user.email == null || user.password == null) {
      return false;
    }

    return true;
  }

  addUser(user) {
    if (this.validateUser(user)) {
      throw InvalidUserError(
        `Invalid id(${user.id}) or password(${user.password})`,
      );
    }

    this.users.push(user);

    localStorage.setItem(USERS_KEY, JSON.stringify(this.users));
  }
}
