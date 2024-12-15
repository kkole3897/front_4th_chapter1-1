const USERS_KEY = "users";

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
    this.users.push(user);

    localStorage.setItem(USERS_KEY, JSON.stringify(this.users));
  }
}
