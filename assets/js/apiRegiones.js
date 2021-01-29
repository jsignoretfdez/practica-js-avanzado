export  function selectPais () {
    const paises = ['España', 'Otros'];
    let html = `<option value="" selected disabled>País...</option>`;

    paises.forEach(pais => (pais, html += `<option>${pais}</option>`));
    document.querySelector('#land').innerHTML = html;



}

export  function selectProvincia () {
    const provincias = ['Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres',
        'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
        'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
        'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
        'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'];

    let html = `<option value="" selected disabled>Provincia...</option>`;

    provincias.forEach(provincia => html += `
    
    <option>${provincia}</option>
    `);
    document.querySelector('#provincia').innerHTML = html;

}


