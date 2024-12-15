import { Component } from "@/shared/lib/component";

export class BaseFooter extends Component {
  constructor(el) {
    super(el);
  }

  template() {
    return `
      <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
    `;
  }
}
