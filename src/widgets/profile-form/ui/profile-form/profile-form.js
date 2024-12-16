import { Component } from "@/shared/lib/component";
import { Viewer } from "@/entities/viewer";

export class ProfileForm extends Component {
  constructor(el) {
    super(el);

    this.attachEventListeners();
  }

  attachEventListeners() {
    this.el.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const viewer = new Viewer();
    viewer.update(data);

    this.render();
  }

  template() {
    const viewer = new Viewer();
    console.log(viewer.viewer);

    return `
      <div class="mb-4">
        <label
          for="username"
          class="block text-gray-700 text-sm font-bold mb-2"
          >사용자 이름</label
        >
        <input
          type="text"
          id="username"
          name="username"
          value='${viewer.viewer.username}'
          class="w-full p-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label
          for="email"
          class="block text-gray-700 text-sm font-bold mb-2"
          >이메일</label
        >
        <input
          type="email"
          id="email"
          name="email"
          value='${viewer.viewer.email}'
          class="w-full p-2 border rounded"
        />
      </div>
      <div class="mb-6">
        <label
          for="bio"
          class="block text-gray-700 text-sm font-bold mb-2"
          >자기소개</label
        >
        <textarea
          id="bio"
          name="bio"
          rows="4"
          class="w-full p-2 border rounded"
        >${viewer.viewer.bio}</textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white p-2 rounded font-bold"
      >
        프로필 업데이트
      </button>
    `;
  }
}
