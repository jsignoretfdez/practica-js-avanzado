import {isLogged} from "./utils.js";


export function mainUser (){

    // Variables
    const containerInfo = document.querySelector('#container-info');

    // Almaceno los datos obtenido del sessionStorage
    let userLogin = isLogged();

    // Almaceno en variables los datos necesarios.
        let userName = userLogin.username;
        let mail = userLogin.mail;
        let name = MaysPrimera(userLogin.nombre.toLowerCase());
        let apellido = MaysPrimera(userLogin.apellido.toLowerCase());

    // Creo la vista de la información de usuario.
        const divInfo = document.createElement('div');
        divInfo.classList.add('container', 'emp-profile');
        divInfo.innerHTML = `
        <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src="http://www.smartpowerdrink.com/pub/skin/default-skin/img/avatar.png" alt=""/>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="profile-head">
                        <h5>
                           Bienvenido, ${name} ${apellido}
                        </h5>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                   aria-controls="home" aria-selected="true">Perfil</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 pt-3">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Username:</label>
                                </div>
                                <div class="col-md-6">
                                    <p>${userName}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Email:</label>
                                </div>
                                <div class="col-md-6">
                                    <p>${mail}</p>
                                </div>
                            </div>
                            <a href="./peliculas.html">
                                <button type="submit" class="btn btn-info btn-lg" id="btnFilm">Peliculas</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `
        containerInfo.appendChild(divInfo);


    // Evento para acceder a películas
    const btnFilm = document.querySelector('#btnFilm');
    btnFilm.addEventListener('click', goFilms);

    // Redirige a la pagina películas.
    function goFilms () {

        window.location = 'peliculas.html';

    }

}

function MaysPrimera(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}


