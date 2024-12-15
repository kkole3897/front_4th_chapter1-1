import { Viewer } from "@/entities/viewer";
import { Component } from "@/shared/lib/component";
import { HistoryRouter } from "@/shared/lib/router";

export class BaseHeader extends Component {
  constructor(el) {
    super(el);

    this.viewer = new Viewer();
    this.attatchEventListeners();
  }

  attatchEventListeners() {
    this.el.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(event) {
    if (event.target.id === "logout") {
      event.preventDefault();
      this.viewer.logout();
      HistoryRouter.push("/");
    }
  }

  template() {
    return `
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
            <li><a href="/" class="text-blue-600">홈</a></li>
            ${
              this.viewer.isAuthenticated
                ? `
                <li><a href="/profile" class="text-gray-600">프로필</a></li>
                <li><a id="logout" href="#" class="text-gray-600">로그아웃</a></li>
              `
                : `
                <li><a href="/login" class="text-gray-600">로그인</a></li>
              `
            }
        </ul>
      </nav>
    `;
  }
}
