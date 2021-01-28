import {isLogged, limpiarHTML, logged} from "./utils.js";


export function mainFilms () {

    //variables
    const divFilmsContainer = document.querySelector('#container-films');
    const btnPrev = document.querySelector('#page-prev');
    const btnNext = document.querySelector('#page-next');
    let url = 'https://api.themoviedb.org/3/movie/';
    let pageInit = 1;

    // Extraigo el Api almacenado en el sessionStorage.
    const userLogged = isLogged();
    const userApi = userLogged.apiKey;

    peticionFilms(pageInit);

    function peticionFilms (page) {
        let urlFilms= `${url}now_playing?api_key=${userApi}&language=es-ES&page=${page}`;
    fetch(urlFilms)
        .then(res =>{
            if (!res.ok) throw new Error();
            return res.json()
        })
        .then(data => getFilms(data))
        .catch(err =>{

            const divTable = document.createElement('div');
            divTable.classList.add('container');
            divTable.innerHTML =`          
            <div class="alert alert-danger" role="alert">
              <h4 class="alert-heading">${err}</h4>
              <p> Algo salio mal y no es posible acceder al contenido, le rogamos revise que su información de usuario es correcta.</p>
              <hr>
              <p class="mb-0">Sentimos las molestias ocasionada.</p>
            </div>
            `
            divFilmsContainer.appendChild(divTable);


        });
        ;
    }

    function getFilms (data) {
        limpiarHTML(divFilmsContainer);

        const resultado = data.results;
        let contador = 1;

        btnNext.style.display= 'block';
        btnPrev.style.display= 'block';

        if (pageInit > 1) {
            btnPrev.classList.remove('oculto');
            btnPrev.classList.add('mostrar');
        } else{
            btnPrev.classList.remove('mostrar');
            btnPrev.classList.add('oculto');
        }

        const listado = resultado.map(item => {
            let pelicula = {
                titulo: item.title,
                img: item.poster_path,
                id: item.id
            }
            return pelicula;
        })

        listado.forEach(item => {
            const divTable = document.createElement('table');
            divTable.classList.add('table');
            divTable.innerHTML = `
            <tbody>
                <tr>
                    <th class="align-middle">${contador}</th>
                    <td class="col-6 text-center align-middle">${item.titulo}</td>
                    <td class="col-6 text-right align-middle"><button value="${item.id}" class="btn btn-info btn-film">Info</button></td>
                </tr>
            </tbody>
            `
            divFilmsContainer.appendChild(divTable);
            contador++

        });

        const btnFilmDetail = document.querySelectorAll('.btn-film');


        btnFilmDetail.forEach(item => {
           item.addEventListener('click', getFilm);

        });
    }

    function getFilm (e) {

        let idFilm = e.target.value;
        let urlDetail = `${url}${idFilm}?api_key=${userApi}&language=es-ES`;

        console.log(urlDetail);

        fetch(urlDetail)
            .then(res => {
                if (!res.ok) throw Error (res.status);
                return res.json();
            })
            .then(data => {getFilmDetail(data)})
            .catch(err => console.log(err));
    }


    // Eventos Paginación
        btnNext.addEventListener('click', (e) => {
            pageInit++
            peticionFilms(pageInit)
        });

        btnPrev.addEventListener('click', (e) => {
            pageInit--
            peticionFilms(pageInit);
        });

}

function getFilmDetail(data) {

    let datos = {
        title: data.title,
        desc: data.overview,
        img: data.poster_path,
        url: data.homepage,
        date: data.release_date,
        votos: data.vote_average,
        genero: data.genres,
        production: data.production_companies,
        tag: data.tagline,
    }

    function movieDetail() {
        sessionStorage.setItem('movie', JSON.stringify(datos));
    }

    movieDetail();

    window.location = 'film-detail.html';

};
