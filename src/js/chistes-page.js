import { obtenerChite } from "./http-provider";
import { crearIndexHtml } from "./index-page";
import { initUsuarios } from "./usuarios-page";

const body = document.body;
let btnChiste, btnVolver, olList; 

const crearChistesHtml = () => {

    const html = `
    <div class="d-flex align-items-center justify-content-between">
        <button class="btn btn-danger" id="volver"><= Volver</button>
        <img src="./assets/img/logo.png" alt="Logo" class="logo">
        <h1 class="tit">Chistes Chuk Norris</h1>
        <button class="btn btn-primary" id="chiste">Otro chiste</button>
    </div>
    
    <hr>
    
    <ol class="mt-2 list-group lista" translate="yes">
    </ol>
    `
    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    body.append(divChistes);
}

const eventos = () =>{

    olList = document.querySelector('ol');
    btnChiste = document.getElementById('chiste');
    btnVolver = document.getElementById('volver');

    btnChiste.addEventListener('click', async () => {

        btnChiste.disabled = true;
        dibujarChiste( await obtenerChite() );
        btnChiste.disabled = false;
    })

    btnVolver.addEventListener('click', async () => {

        document.body.innerHTML = '';
        crearIndexHtml();

        let btnChistes = document.getElementById('chistes');
        let btnUsuarios = document.getElementById('usuarios');

        btnChistes.addEventListener('click', async () => {
            document.body.innerHTML = '';
            initChistes();
        })

        btnUsuarios.addEventListener('click', async () => {
            document.body.innerHTML = '';
            initUsuarios();
        })

    })

}

const dibujarChiste = ( chiste ) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = chiste.value;
    olItem.classList.add('list-group-item');
    olList.append(olItem);

}

export const initChistes = () => {
    crearChistesHtml();
    eventos();
}