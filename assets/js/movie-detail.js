

export function mainMovieDetail (){
    const divFilm = document.querySelector('#container-film');
    let datosMovie = JSON.parse(sessionStorage.getItem('movie'));
    console.log(datosMovie);
    let genero = datosMovie.genero;
    let production = datosMovie.production;

    const dataGen = genero.map(item => {
        let data = item.name;
        return data;
    });

   let dataProd = production.map(item => {
        let data = item.name;
        return data
    });

   let joinGen = dataGen.join(' - ');
   let joinProd = dataProd.join(' - ');

   const {date, desc, img, tag, title, url, votos } = datosMovie;

   const movie = document.createElement('div');
   movie.classList.add('container-main', 'border', 'p-3', 'border-info');
   movie.innerHTML = `
        <div class="row">
            <div class="col-md-12 col-lg-4">
                <img src="https://www.themoviedb.org/t/p/original/${img}" alt="Foto Películas ${title}" class="rounded" width="90%">
            </div>
            <div class="col-md-12 col-lg-8">
                <h3 class="mt-3">${title}</h3>
                <span>${tag}</span>
                <p class="text-left mt-2 font-weight-bold">Descripción</p>
                <p class="text-left">${desc}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-lg-4">
               <p class="text-left mt-2 font-weight-bold">Producción: <span class="font-weight-normal">${joinProd}</span></p>
            </div>
       
            <div class="col-md-12 col-lg-4">
               <p class="text-left mt-2 font-weight-bold">Genero: <span class="font-weight-normal">${joinGen}</span></p>
            </div>
           
            <div class="col-md-12 col-lg-4">
               <p class="text-left mt-2 font-weight-bold">Estreno: <span class="font-weight-normal">${date}</span></p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-lg-4">
               <p class="text-left mt-2 font-weight-bold">Más Información: <a href="${url}" class="font-weight-normal">${url}</a></p>
            </div>
        </div>
   `
    divFilm.appendChild(movie);






}
