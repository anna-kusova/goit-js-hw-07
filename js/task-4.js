const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const { email, password } = loginForm.elements;

    const emailTrim = email.value.trim();
    const passwordTrim = password.value.trim();

    if (emailTrim === '' || passwordTrim === '') {
        alert('All form fields must be filled in');
        return;
    };

    const formData = {
        email: emailTrim,
        password: passwordTrim,
    };

    console.log(formData);

    loginForm.reset();

})

