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

const mobile = document.querySelector('#tel');
const mobileError = document.querySelector('.tel-output');

mobile.addEventListener('input', function() {
    let mobileRegex = /^\d{1,4}\s\d{10}$/;
    if (mobileRegex.test(mobile.value)) {
        mobileError.textContent = "";
    } else {
        mobileError.textContent = "Mobile format is Incorrect.";
    }
});

const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.pwd-output');

password.addEventListener('input', function() {
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordRegex.test(password.value)) {
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "Password must meet all rules: Minimum 8 characters, 1 uppercase letter, 1 numeric digit, and 1 special character";
    }
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');

salary.addEventListener('input', function() {
    output.textContent = salary.value;
});
