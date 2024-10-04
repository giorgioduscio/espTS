import { itemize } from "../../tools/abbreviations.js";
import closeDropdown from "../../tools/closeDropdown.js";
import { pagesRouter } from "../router.js";
export default function navbar() {
    document.querySelector('nav#navbar').innerHTML = `
    <div>
      <details class="navDrop">
        <summary> <span class="material-symbols-outlined">article</span> </summary>
        <div> ${itemize(pagesRouter
        .filter(page => page.show && page.title != document.title), page => `<a href="${page.path}">${page.title}</a>`)}
        </div>
      </details>
    </div>
  `;
    document.head.innerHTML += `<link rel="stylesheet" href="/src/structure/navbar/navbar.css">`;
    closeDropdown('navDrop');
}
