import React from 'react';

const NavBar = () => {

    //con listado de categorias clickeables entendi que habia que hacer etiquetas p que simulen categorias clickeables.
    //Por ello no hize que las categorias lleven a otra seccion de la app al hacer click en ellas (no hay ni se exigieron mas secciones donde llevar)
    return(
        <div>
            <h2> Conectate app</h2>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <p>categoria 1</p>
                <p> categoria 2</p>
                <p>categoria 3</p>
            </div>
        </div>
    )
};

export default NavBar;