
export function getLogin() {
    const users = (localStorage.getItem('usuarios')) ?
        JSON.parse(localStorage.getItem('usuarios')) :
        [];
    return users;
}

export function logged (usuario) {
    sessionStorage.setItem('usuario', JSON.stringify(usuario));
    JSON.parse(sessionStorage.getItem('usuario'));
}

export function isLogged () {
    const userLogged = (sessionStorage.getItem('usuario')) ?
        JSON.parse(sessionStorage.getItem('usuario')) :
        [];
    return userLogged;
}
