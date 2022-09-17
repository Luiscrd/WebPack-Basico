import { obtenerUsuarios } from "./http-provider";

let tbody;
let correlativo = 0;
const body  = document.body;

const crearHtml = () => {
    
    const html = `
    <div class="d-flex align-items-center justify-content-between">
        <h1 class="tit2">Usuarios</h1>
        <img src="./assets/img/usuarios.png" alt="Logo" class="logo2">
    </div>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    tbody = document.querySelector('tbody');

}

const crearFilaUsuario = ( usuario ) => {
    
    correlativo++;

    const html = `
        <td scope="col">${ usuario.id }</td>
        <td scope="col">${ usuario.email}</td>
        <td scope="col">${ usuario.first_name } ${ usuario.last_name }</td>
        <td scope="col">
            <img class="img-thumbnail" src="${ usuario.avatar }">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tbody.appendChild( tr );

}


export const initUsuarios = async() => {

    crearHtml();

    correlativo = 0;

    (await obtenerUsuarios()).forEach( crearFilaUsuario );
}

