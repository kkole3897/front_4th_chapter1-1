import { Component } from "@/shared/lib/component";
import { LoginForm } from "@/widgets/login-form";

export class LoginPage extends Component {
  constructor(el) {
    super(el);
  }

  render() {
    this.el.innerHTML = this.template();

    const formEl = this.el.querySelector("#login-form");
    new LoginForm(formEl).render();
  }

  template() {
    return `
      <main class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
          <form id="login-form"></form>
          <div class="mt-4 text-center">
            <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
          </div>
          <hr class="my-6">
          <div class="text-center">
            <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
          </div>
        </div>
      </main>
    `;
  }
}
