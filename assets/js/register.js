import {selectPais, selectProvincia} from "./apiRegiones.js";
import {getLogin} from "./utils.js";

export function mainRegister (storeUsers) {
    const form = document.querySelector('#form-register');
    const aGenero = document.querySelectorAll('[name="genero"]');
    const aName = document.querySelector('#name');
    const aApellido = document.querySelector('#lastname');
    const aEmail = document.querySelector('#mail');
    const provincia = document.querySelector('#provincia');
    const pais = document.querySelector('#land');
    const mobile = document.querySelector('#mobile');
    const username = document.querySelector('#username');
    const pwd = document.querySelector('#pwd1');
    const pwdConfirm = document.querySelector('#pwd2');
    const apiKey = document.querySelector('#api');
    const btnRegistro = document.querySelector('#btnRegistro');
    const smsUser = document.querySelector('#sms-user');
    const smsMail = document.querySelector('#sms-email');
    const smsApi = document.querySelector('#sms-api');


    pais.addEventListener('change', selectLand);
    form.addEventListener('submit', register);
    selectPais();

    function selectLand () {

        const paisSeleccionado = pais.value;

        if (paisSeleccionado === 'España') {
            selectProvincia();
        } else if ( paisSeleccionado === 'Otros'){
            provincia.innerHTML = `
            <option value="Cuidad del Mundo" selected disabled>Ciudad del Mundo</option>
            `
        }
    }

    function register (e) {

        let validateUSer = getLogin();

        const userValidate = validateUSer.find(item => item.usuario === username.value);
        const mailValidate = validateUSer.find(item => item.email === aEmail.value);
        const apiValidate = validateUSer.find(item=> item.apikey === apiKey.value);

        if (userValidate || mailValidate || apiValidate) {
            limpiarHTML();
            if (userValidate){
                e.preventDefault();
                smsUser.classList.remove('nodisplay');
                smsUser.classList.add('display');
            }
            if (mailValidate){
                e.preventDefault();
                smsMail.classList.remove('nodisplay');
                smsMail.classList.add('display');
            }
            if(apiValidate){
                e.preventDefault();
                smsApi.classList.remove('nodisplay');
                smsApi.classList.add('display');
            }

        }
         else {
        e.preventDefault();

        if (pwd.value !== pwdConfirm.value) {
            e.preventDefault();

            let divSms = document.querySelector('form');

            let sms = document.createElement('div');
            sms.classList.add('alert', 'alert-danger');
            sms.innerHTML = `
            <p>No Coinciden las contraseñas, introdúcelas de Nuevo.</p>
            `
            let div = divSms.insertBefore(sms, btnRegistro);
            console.log(div);
            pwd.value = "";
            pwdConfirm.value = "";
            return;
        } else{
            const data = {};
            data.nombre = aName.value.trim();
            data.genero = aGenero.value;
            data.apellido = aApellido.value.trim();
            data.email = aEmail.value.trim();
            data.pais = pais.value;
            data.provincia = provincia.value;
            data.movil = mobile.value.trim();
            data.usuario = username.value.trim();
            data.contraseña = pwd.value.trim();
            data.apikey = apiKey.value.trim();

            save(data)
            registroCompletado()
        }
        }

    }


    function save (data) {
        const inputs = [...form.querySelectorAll('input')]
        const users = window.localStorage.getItem(storeUsers) ?
            JSON.parse(window.localStorage.getItem(storeUsers)) : []
        users.push(data);
        window.localStorage.setItem(storeUsers, JSON.stringify(users))
        inputs.forEach(item => item.value = '');
    }

    function registroCompletado (e) {
        window.location = 'login.html';
    }

    function limpiarHTML () {
        while (smsUser.firstElementChild) {
            smsUser.removeChild(smsUser.firstElementChild);
        }
    }


}






