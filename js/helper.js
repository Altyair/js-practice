export const createBlockForCode = (code) => {
    const content = document.querySelector("#content");
    const codeBlock = document.createElement('div');
    codeBlock.className = "highlight";
    codeBlock.innerHTML = `
        <pre class="highlight plaintext">
            <code>
                ${code}
            </code>
        </pre>
    `;
    content.appendChild(codeBlock);
}
