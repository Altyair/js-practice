import { createAdaptive } from "../helper";

// ---------------------------------- adaptive ------------------------
export const main = () => {
    createAdaptive();

    const content = document.querySelector('.content');
    const adaptive = document.createElement('div');
    adaptive.className = "adaptive-ex-1";
    adaptive.innerHTML = `
        <h1 class="title">@media - Медиа запросы</h1>
        <div class="container">
            <div class="main" style="text-align: center; background: rgb(182, 230, 244)">Main</div>
            <div class="sidebar" style="text-align: center; background: rgb(182, 230, 244)">Sidebar</div>
        </div>
    `;
    content.appendChild(adaptive);
};
