const input = document.querySelector('#name-input');
const nameAnonym = document.querySelector('#name-output')

input.addEventListener('input', (event) => {
    nameAnonym.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        nameAnonym.textContent = 'Anonymous'
    }
})