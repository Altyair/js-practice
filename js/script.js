let currentModule;

const loadModule = (name) => {
    import(`./examples/${name}`)
        .then((module) => {
            currentModule = module;
            module.main();
            window.location.hash = name;
        })
        .catch((err) => {
            console.log(err);
            throw new Error(err);
        });
}

const setPage = (hash) => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.remove('adaptive');

    const burgerMenuButton = document.querySelector('.burger-menu-button');
    if (burgerMenuButton) wrapper.removeChild(burgerMenuButton);

    loadModule(hash);
    selectMenuElement(hash);
}

let prevPage;
const selectMenuElement = (hash) => {
    if (prevPage) prevPage.style.fontWeight = 'normal';
    const element = document.querySelector(`[data-hash="${hash}"]`);
    prevPage = element;
    element.style.fontWeight = 'bold';
}

window.onload = () => {
    try {
        const hash = window.location.hash.replace(/#/, '');
        if (hash) setPage(hash);

        const content = document.querySelector(".content");
        document.querySelector('.menu').addEventListener('click', event => {
            if (currentModule && currentModule.detach) {
                console.log(888);
                currentModule.detach();
            }

            if (event.target.tagName !== 'LI') return;
            const hash = event.target.dataset.hash;
            content.innerHTML = '';
            setPage(hash);
        });
    } catch (e) {
        console.log(e);
    }
}
