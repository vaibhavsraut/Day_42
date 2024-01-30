const text = document.querySelector('#text');
const textError = document.querySelector('.text-output');

text.addEventListener('input', function() {
    let nameRegex = /^[A-Z]{1}[a-z]{2,}$/;
    if (nameRegex.test(text.value)) {
        textError.textContent = "";
    } else {
        textError.textContent = "Name is Incorrect";
    }
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-output');

email.addEventListener('input', function() {
    let emailRegex = /^[a-zA-Z]+([.+-]\w+)*@[a-zA-Z]+(\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?)$/;
    if (emailRegex.test(email.value)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "Email is Incorrect";
    }
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');

salary.addEventListener('input', function() {
    output.textContent = salary.value;
});
