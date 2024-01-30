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

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');

salary.addEventListener('input', function() {
    output.textContent = salary.value;
});
