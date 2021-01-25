import {selectPais, selectProvincia} from "./apiRegiones.js";
import {getLogin} from "./utils.js";

export function mainRegister (storeUsers) {
    const form = document.querySelector('#form-register');
    const aGenero = [...document.querySelectorAll('[name="genero"]')];
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
        }

            const data = {};
            data.nombre = aName.value;
            data.genero = (aGenero.checked) ? aGenero.filter(item => item.checked)[0].value : "";
            data.apellido = aApellido.value;
            data.email = aEmail.value;
            data.pais = pais.value;
            data.provincia = provincia.value;
            data.movil = mobile.value;
            data.usuario = username.value;
            data.contraseña = pwd.value;
            //data.confirmaContraseña = pwdConfirm.value;
            data.apiKey = apiKey.value;

            save(data)
            registroCompletado()

    }


    function save (data) {
        const inputs = [...form.querySelectorAll('input')]
        const users = window.localStorage.getItem(storeUsers) ?
            JSON.parse(window.localStorage.getItem(storeUsers)) : []
        users.push(data)
        window.localStorage.setItem(storeUsers, JSON.stringify(users))
        inputs.forEach(item => item.value = '');
    }

    function registroCompletado (e) {
        window.location = 'login.html';
    }



}






