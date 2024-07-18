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

let prevPage;
const selectMenuElement = (hash) => {
    if (prevPage) {
        prevPage.style.fontWeight = 'normal';
    }
    const element = document.querySelector(`[data-hash="${hash}"]`);
    prevPage = element;
    element.style.fontWeight = 'bold';
}

window.onload = () => {
    const hash = window.location.hash.replace(/#/, '');
    if (hash) {
        loadModule(hash);
        selectMenuElement(hash);
    }

    const content = document.getElementsByClassName("content")[0];
    document.getElementsByClassName('menu')[0].addEventListener('click', event => {
        if (event.target.tagName !== 'LI') return;
        const hash = event.target.dataset.hash;
        content.innerHTML = '';

        loadModule(hash);
        selectMenuElement(hash);
    });
}
