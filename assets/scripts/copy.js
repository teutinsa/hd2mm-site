const copy_buttons = document.getElementsByTagName('button')

copy_buttons.forEach(button => {
    const attrib = button.getAttribute('data-copy-source');

    if (attrib) {
        const elm = document.querySelector(attrib);

        if (elm) {
            const text = elm.innerText;

            button.addEventListener('click', () => {
                window.navigator.clipboard.writeText(text);
            })
        }
    }
})