

(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'contact_form';
        if (event.target.classList.contains('was-validated')) {
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Send Email';
                    $('#success_message').show();
                    window.setTimeout(function () { location.reload() }, 3000)
                }, (err) => {
                    btn.value = 'Send Email';
                    $('#error_message').show();
                    window.setTimeout(function () { location.reload() }, 3000)
                });
        }
    });
