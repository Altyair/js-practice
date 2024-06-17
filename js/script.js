const loadModule = (name) => {
    import(`./examples/${name}`)
        .then((module) => {
            module.main();
            window.location.hash = name;
        })
        .catch((err) => {
            throw new Error(err);
        });
}

const selectMenuElement = (hash) => {
    const element = document.querySelector(`[data-hash="${hash}"]`);
    element.style.fontWeight = 'bold';
}

window.onload = () => {
    const hash = window.location.hash.replace(/#/, '');
    if (hash) {
        loadModule(hash);
        selectMenuElement(hash);
    }

    const content = document.querySelector("#content");
    document.querySelector('#menu').addEventListener('click', event => {
        if (event.target.tagName !== 'LI') return;
        const hash = event.target.dataset.hash;
        content.innerHTML = '';

        loadModule(hash);
        selectMenuElement(hash);
    });
}
