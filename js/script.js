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

window.onload = () => {
    if (window.location.hash) {
        console.log(window.location);
        loadModule(window.location.hash.replace(/#/, ''));
    }

    const content = document.querySelector("#content");
    document.querySelector('#menu').addEventListener('click', event => {
        if (event.target.tagName !== 'LI') return;
        const name = event.target.dataset.hash;
        content.innerHTML = '';

        loadModule(name);
    });
}
