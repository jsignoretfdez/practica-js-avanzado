
// Función que nos extrae los datos solicitados del localStorage
export function getLogin() {
    const users = (localStorage.getItem('usuarios')) ?
        JSON.parse(localStorage.getItem('usuarios')) :
        [];
    return users;
}

// Almacena el usuario Logueado en el sessionStorage.
export function logged (usuario) {
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
    JSON.parse(sessionStorage.getItem('usuario'));
}

// Extrae datos del sessionStorage.
export function isLogged () {
    const userLogged = (sessionStorage.getItem('usuario')) ?
        JSON.parse(sessionStorage.getItem('usuario')) :
        [];
    return userLogged;
}

// Limpia los errores.
export function limpiarHTML (valor) {
    while (valor.firstElementChild) {
        valor.removeChild(valor.firstElementChild);
    }
}
