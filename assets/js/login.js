import {getLogin, logged} from "./utils.js";


export function mainLogin() {

    const userInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#userpwd');
    const btnLogin = document.querySelector('#btnLogin');
    const form = document.querySelector('#formLogin');
    let sms = document.querySelector('#sms');
    let userValidate = [];

    btnLogin.addEventListener('click', onClickLogin);



        function onClickLogin(e) {

            e.preventDefault();

            let user = getLogin();

            if (user.length <= 0) {
                limpiarHTML();
                let divSms = document.createElement('div');
                divSms.innerHTML = `
                <p>No se han encontrado registros. Sera redirigido a la página de registro</p>
                `
                divSms.classList.add('alert', 'alert-danger', 'col-12', 'tex-align-center');

                form.appendChild(divSms);

                setTimeout(() => {
                    window.location = 'registro.html';
                }, 2500);
            }

            if (userInput.value.length <= 0 || passwordInput.value.length <= 0){

                limpiarHTML();
                let divSms = document.createElement('div');
                divSms.innerHTML = `
                <p>Lo campos no pueden estar vacios</p>
                `
                divSms.classList.add('alert', 'alert-danger', 'col-12', 'tex-align-center');

                sms.appendChild(divSms);

                console.log(sms.firstChild);

            } else{

                user.map((item) => {
                let userName = item.usuario
                let pass = item.contraseña;
                let api = item.apiKey;
                let nombre = item.nombre;
                let apellidos = item.apellido;
                let mail = item.email;

                    if (userName === userInput.value.trim() && pass === passwordInput.value.trim()) {
                        const usuario = {};
                        usuario.username = userInput.value;
                        usuario.apiKey = api;
                        usuario.nombre = nombre;
                        usuario.apellido = apellidos;
                        usuario.mail = mail;

                        userValidate.push(usuario);

                        logged(usuario);
                        window.location = 'usuario.html';
                    }
            });
                if(userValidate.length === 0){
                    limpiarHTML();
                    let divSms = document.createElement('div');
                    divSms.innerHTML = `
                    <p>El usuario o la contraseña son incorrectos</p>
                    `
                    divSms.classList.add('alert', 'alert-danger', 'col-12', 'tex-align-center');

                    sms.appendChild(divSms);
                }
            }

        }


    function limpiarHTML () {
        while (sms.firstChild) {
            sms.removeChild(sms.firstChild);
        }
    }
}


