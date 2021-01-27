

export function mainMovieDetail (){
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

    console.log(joinGen);
    console.log(joinProd);






}
