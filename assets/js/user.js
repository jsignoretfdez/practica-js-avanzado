import {isLogged} from "./utils.js";


export function mainUser (){


    const containerInfo = document.querySelector('#container-info');


    let userLogin = isLogged();

        let userName = MaysPrimera(userLogin.username.toLowerCase());
        let mail = userLogin.mail;
        let name = userLogin.nombre;
        let apellido = userLogin.apellido;

        const divInfo = document.createElement('div');
        divInfo.classList.add('container', 'emp-profile');
        divInfo.innerHTML = `
        <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src="http://www.smartpowerdrink.com/pub/skin/default-skin/img/avatar.png" alt=""/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="profile-head">
                        <h5>
                           Bienvenido, ${userName}
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
                <div class="col-md-12 pt-6">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Name</label>
                                </div>
                                <div class="col-md-6">
                                    <p>${name} ${apellido}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Email</label>
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


    const btnFilm = document.querySelector('#btnFilm');
    btnFilm.addEventListener('click', goFilms);


    function goFilms () {

        window.location = 'peliculas.html';

    }

}

function MaysPrimera(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}


