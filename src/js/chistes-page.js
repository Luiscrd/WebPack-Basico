import { obtenerChite } from "./http-provider";

const body = document.body;
let btnChiste, olList; 

const crearChistesHtml = () => {

    const html = `
    <div class="d-flex align-items-center justify-content-between">
        <button class="btn btn-danger">Volver</button>
        <img src="./assets/img/logo.png" alt="Logo" class="logo">
        <h1 class="tit">Chistes Chuk Norris</h1>
        <button class="btn btn-primary">Otro chiste</button>
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
    btnChiste = document.querySelector('button');

    btnChiste.addEventListener('click', async () => {

        btnChiste.disabled = true;
        dibujarChiste( await obtenerChite() );
        btnChiste.disabled = false;
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