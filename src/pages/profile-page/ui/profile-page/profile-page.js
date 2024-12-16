import { BaseHeader } from "@/widgets/base-header";
import { BaseFooter } from "@/widgets/base-footer";
import { Component } from "@/shared/lib/component";
import { ProfileForm } from "@/widgets/profile-form";

export class ProfilePage extends Component {
  constructor(el) {
    super(el);
  }

  render() {
    this.el.innerHTML = this.template();

    const headerEl = this.el.querySelector("#header");
    new BaseHeader(headerEl).render();

    const footerEl = this.el.querySelector("#footer");
    new BaseFooter(footerEl).render();

    const formEl = this.el.querySelector("#profile-form");
    new ProfileForm(formEl).render();
  }

  template() {
    return `
      <div id="root">
        <div class="bg-gray-100 min-h-screen flex justify-center">
          <div class="max-w-md w-full">
            <div id="header"></div>

            <main class="p-4">
              <div class="bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                  내 프로필
                </h2>
                <form id="profile-form"></form>
              </div>
            </main>

            <div id="footer"></div>
          </div>
        </div>
      </div>
    `;
  }
}
