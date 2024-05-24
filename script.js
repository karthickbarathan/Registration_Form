
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        $('#successToast').toast('show');
    }
});

function validateForm() {
    let isValid = true;

    const name = document.getElementById('name').value;
    if (name === '') {
        alert('Please enter your name.');
        isValid = false;
    }

    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    const phone = document.getElementById('phone').value;
    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number.');
        isValid = false;
    }


    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
}
