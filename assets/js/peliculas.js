import {isLogged} from "./utils.js";


export function mainFilms () {

    const divFilmsContainer = document.querySelector('#container-films');
    let url = 'https://api.themoviedb.org/3/movie/';
    let pageInit = 1;

    const userLogged = isLogged();
    const userApi = userLogged.apiKey;

    let urlFilms= `${url}now_playing?api_key=${userApi}&language=en-US&page=${pageInit}`;

    fetch(urlFilms)
        .then(res =>{
            if (!res.ok) throw Error(res.status);
            return res.json()
        })
        .then(data => getFilms(data))
        .catch(err => console.log(err));


    function getFilms (data) {

        const resultado = data.results;
        let contador = 1;

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
                    <td class="col-3 text-right align-middle"><button value="${item.id}" class="btn btn-info btn-film">Detalles</button></td>
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
        let urlDetail = `${url}${idFilm}?api_key=${userApi}`;

        console.log(urlDetail);

        fetch(urlDetail)
            .then(res => {
                if (!res.ok) throw Error (res.status);
                return res.json();
            })
            .then(data => {
                console.log(data);
                getFilmDetail(data)

            })
            .catch(err => console.log(err));


    }
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

}











/*
{
    "adult": false,
    "backdrop_path": "/srYya1ZlI97Au4jUYAktDe3avyA.jpg",
    "belongs_to_collection": {
        "id": 468552,
        "name": "Wonder Woman Collection",
        "poster_path": "/8AQRfTuTHeFTddZN4IUAqprN8Od.jpg",
        "backdrop_path": "/n9KlvCOBFDmSyw3BgNrkUkxMFva.jpg"
    },
    "budget": 200000000,
    "genres": [
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        }
    ],
    "homepage": "https://www.warnerbros.com/movies/wonder-woman-1984",
    "id": 464052,
    "imdb_id": "tt7126948",
    "original_language": "en",
    "original_title": "Wonder Woman 1984",
    "overview": "Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.",
    "popularity": 2751.779,
    "poster_path": "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    "production_companies": [
        {
            "id": 9993,
            "logo_path": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
            "name": "DC Entertainment",
            "origin_country": "US"
        },
        {
            "id": 174,
            "logo_path": "/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png",
            "name": "Warner Bros. Pictures",
            "origin_country": "US"
        },
        {
            "id": 114152,
            "logo_path": null,
            "name": "The Stone Quarry",
            "origin_country": "US"
        },
        {
            "id": 128064,
            "logo_path": "/13F3Jf7EFAcREU0xzZqJnVnyGXu.png",
            "name": "DC Films",
            "origin_country": "US"
        },
        {
            "id": 507,
            "logo_path": "/z7H707qUWigbjHnJDMfj6QITEpb.png",
            "name": "Atlas Entertainment",
            "origin_country": "US"
        },
        {
            "id": 429,
            "logo_path": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
            "name": "DC Comics",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2020-12-16",
    "revenue": 131400000,
    "runtime": 151,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "A new era of wonder begins.",
    "title": "Wonder Woman 1984",
    "video": false,
    "vote_average": 7.1,
    "vote_count": 3085
}*/
