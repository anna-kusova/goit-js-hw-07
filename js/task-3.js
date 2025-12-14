const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', () => {
    const trimValue = inputEl.value.trim();

    if (trimValue === '') {
        outputEl.textContent = 'Anonymous';
    } else {
        outputEl.textContent = trimValue;
    }
});