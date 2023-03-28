const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) { 
    event.preventDefault();

    const formData = { email: event.currentTarget.email.value, password: event.currentTarget.password.value };

    if (formData.email === '' || formData.password === '') {
        return alert('Заповніть поля!');
    }
    console.log(formData);
 
    event.currentTarget.reset();
};
