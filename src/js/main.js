'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Loading',
        success: 'success',
        failure: 'Something went wrong...'
    }

    forms.forEach(form => {
        postData(form);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            /* const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage); */

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            const object = {}
            formData.forEach(function (value, key) {
                object[key] = value;
            });

            const json = JSON.stringify(object);

            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    /* statusMessage.textContent = message.success; */
                } else {
                    /* statusMessage.textContent = message.failure; */
                }

            });
        });
    }
});