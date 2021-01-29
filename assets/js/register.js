import {selectPais, selectProvincia} from "./apiRegiones.js";
import {getLogin, limpiarHTML} from "./utils.js";

export function mainRegister (storeUsers) {
    // Variables
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
    const comments = document.querySelector('#comments');
    const btnRegistro = document.querySelector('#btnRegistro');
    const smsUser = document.querySelector('#sms-user');
    const smsMail = document.querySelector('#sms-email');
    const smsApi = document.querySelector('#sms-api');


    // Eventos
    pais.addEventListener('change', selectLand);
    form.addEventListener('submit', register);
    selectPais();

    /*
     Función que selecciona el País y evalua el valor
     para lanzar la función selectProvincia o le asigna
     un valor.
     */
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

        // Almacenamos en una variable los datos traidos del localStorage
        let validateUSer = getLogin();

        /*
        Comprobamos si el valor introducido en el mail, user y api existen para luego
        mandar un error en caso de que existan.
         */
        const userValidate = validateUSer.find(item => item.usuario === username.value);
        const mailValidate = validateUSer.find(item => item.email === aEmail.value);
        const apiValidate = validateUSer.find(item=> item.apikey === apiKey.value);


        // Si existen lanzamos un error.
        if (userValidate || mailValidate || apiValidate) {
            limpiarHTML(smsUser);
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

        // Comprobamos que las contraseñas coincidan.
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
        } else{
            // Si todo es correcto creamos el objeto con los datos que almacenaremos en el localStorage
            const data = {};
            data.nombre = aName.value.trim();
            data.genero = selectGender(aGenero)
            data.apellido = aApellido.value.trim();
            data.email = aEmail.value.trim();
            data.pais = pais.value;
            data.provincia = provincia.value;
            data.movil = mobile.value.trim();
            data.usuario = username.value.trim();
            data.contraseña = pwd.value.trim();
            data.apikey = apiKey.value.trim();
            data.comment = comments.value;

            // Llamamos a la función save y le pasamos los datos y a continuación la función
            // registroCompletado y los redirige a la pagina login.
            save(data)
            registroCompletado()
        }
        }

    }

    // Función para obtener el genero marcado
    function selectGender(genero) {
        return [...genero].filter(item => item.checked)[0].value
    }

    // Almacena los datos en localStorage.
    function save (data) {
        const users = window.localStorage.getItem(storeUsers) ?
            JSON.parse(window.localStorage.getItem(storeUsers)) : []
        users.push(data);
        window.localStorage.setItem(storeUsers, JSON.stringify(users));
    }

    // Redirige a la página login
    function registroCompletado () {
        window.location = 'login.html';
    }
}






