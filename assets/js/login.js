import {getLogin, logged, limpiarHTML} from "./utils.js";

export function mainLogin() {

    // Variables
    const userInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#userpwd');
    const btnLogin = document.querySelector('#btnLogin');
    const form = document.querySelector('#formLogin');
    let sms = document.querySelector('#sms');
    let userValidate = [];

    // Eventos Login
    btnLogin.addEventListener('click', onClickLogin);

        function onClickLogin(e) {

            e.preventDefault();

            // Almaceno en la variable user los datos traídos del localStorage
            let user = getLogin();

            // Valido que haya usuarios registrados.

            if (user.length <= 0) {
                limpiarHTML(sms);
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

            // Valido que los campos no estén vacíos
            if (userInput.value.length <= 0 || passwordInput.value.length <= 0){

                limpiarHTML(sms);

                let divSms = document.createElement('div');
                divSms.innerHTML = `
                <p>Lo campos no pueden estar vacíos</p>
                `
                divSms.classList.add('alert', 'alert-danger', 'col-12', 'tex-align-center');

                sms.appendChild(divSms);

                console.log(sms.firstChild);

            } else{

                // Recorro los datos almacenados en user y los meto en variables.
                user.map((item) => {
                let userName = item.usuario
                let pass = item.contraseña;
                let api = item.apikey;
                let nombre = item.nombre;
                let apellidos = item.apellido;
                let mail = item.email;

                /*
                Compruebo si hay coincidencias entre el fomulario y los usuarios del localStorage
                si existe los almaceno el el sessionStorage.
                 */
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
                // Si los datos introducidos no existen se lanza un mensaje de error.
                if(userValidate.length === 0){
                    limpiarHTML(sms);
                    let divSms = document.createElement('div');
                    divSms.innerHTML = `
                    <p>El usuario o la contraseña son incorrectos</p>
                    `
                    divSms.classList.add('alert', 'alert-danger', 'col-12', 'tex-align-center');

                    sms.appendChild(divSms);
                }
            }

        }
}


