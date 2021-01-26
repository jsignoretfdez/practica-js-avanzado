export const templateHeader =  {
    render: (page) => {

        let menu;
        let textLogin = (sessionStorage.length > 0) ?
            `
            <li class="nav-item">
                <a class="nav-link" href="./usuario.html">Usuario</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./peliculas.html">Peliculas</a>
            </li>
            <li class="nav-item">
                <a class="nav-link btn-logout" href="./index.html">Logout</a>
            </li>` :

            `
            <li class="nav-item">
                  <a class="nav-link" href="./registro.html">Registrarse</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./login.html">Login</a>
            </li>`



        switch (page){
            case 'login.html':
                menu = `<a class="navbar-brand" href="#">Películas</a>
                    <li class="nav-item">
                        <a class="nav-link" href="./index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./registro.html">Registrarse</a>
                    </li>
                    `
                break;

            case 'registro.html':

         menu = `<a class="navbar-brand" href="#">Películas</a>
                    <li class="nav-item">
                        <a class="nav-link" href="./index.html">Inicio</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="./login.html">Login</a>
                    </li>
                    
                    `
                break;

            case 'usuario.html':

                menu = `<a class="navbar-brand" href="#">Películas</a>
                    <li class="nav-item">
                        <a class="nav-link" href="./index.html">Inicio</a>
                    </li>
                    ${textLogin}`
                break;

            case 'peliculas.html':

                menu = `<a class="navbar-brand" href="#">Películas</a>
                    <li class="nav-item">
                        <a class="nav-link" href="./index.html">Inicio</a>
                    </li>
                    ${textLogin}`
                break;

            default:
                    menu = `<a class="navbar-brand" href="#">Películas</a>
                    <li class="nav-item active">
                        <a class="nav-link" href="./index.html">Inicio<span class="sr-only">(current)</span></a>
                    </li>
                    ${textLogin}`
                break;

        }

        return `
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">${menu}</ul>
        </div>
        `
    }
}
