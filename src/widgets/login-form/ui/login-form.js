import { loginLocal } from "@/features/auth";
import { Component } from "@/shared/lib/component";

export class LoginForm extends Component {
  constructor(el) {
    super(el);

    this.attachEventListeners();
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {
      loginLocal(data);
    } catch {
      alert("로그인 실패");
    }
  }

  attachEventListeners() {
    this.el.addEventListener("submit", this.handleSubmit.bind(this));
  }

  render() {
    this.el.innerHTML = this.template();
  }

  template() {
    return `
      <div class="mb-4">
        <input id="username" type="text" name="username" placeholder="username" class="w-full p-2 border rounded">
      </div>
      <div class="mb-6">
        <input type="password" name="password" placeholder="비밀번호" class="w-full p-2 border rounded">
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
    `;
  }
}
