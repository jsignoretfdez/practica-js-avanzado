import {templateFooter} from "../../templates/footer.js";
import {templateHeader} from "../../templates/header.js";
import {mainRegister} from "./register.js";
import {mainLogin} from "./login.js";
import {mainUser} from "./user.js";
import {mainFilms} from "./peliculas.js";
import {mainMovieDetail} from "./movie-detail.js";


function main (){

// Nodos
const storeUsers = 'usuarios';

// Templates Render
let posicion = location.pathname.lastIndexOf('/') + 1;
let page = location.pathname.slice(posicion);
document.querySelector('.page-footer').innerHTML = templateFooter.render();
document.querySelector('.navbar').innerHTML = templateHeader.render(page);



// Manejadores de Eventos
    if (page === 'registro.html'){
        if(sessionStorage.length > 0){
            window.location = 'usuario.html';
        }
        mainRegister(storeUsers);
    }

    if(page === 'login.html'){
        if(sessionStorage.length > 0){
            window.location = 'usuario.html';
        }
        mainLogin(storeUsers);
    }

    if(page === 'usuario.html'){
        mainUser(storeUsers);
    }

    if(page === 'peliculas.html'){
        if(sessionStorage.length <= 0){
            window.location = 'index.html';
        }
        mainFilms();
    }

    if(page === 'film-detail.html'){
        if(sessionStorage.length <= 0){
            window.location = 'index.html';
        }
        mainMovieDetail();
    }

    // Eventos
    if (sessionStorage.length > 0){
        const logout = document.querySelector('.btn-logout');
        logout.addEventListener('click', logoutUser);
    }


// Funciones

function logoutUser () {
   sessionStorage.clear();
}



}


document.addEventListener("DOMContentLoaded", main)
