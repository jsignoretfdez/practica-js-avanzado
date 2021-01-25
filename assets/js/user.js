import {isLogged} from "./utils.js";


export function mainUser (){

    const btnFilm = document.querySelector('#btnFilm');


    btnFilm.addEventListener('click', getFilms);

    function getFilms (e) {

        e.preventDefault();

        let userLogin = isLogged();
        console.log(userLogin.username);

    }


}
