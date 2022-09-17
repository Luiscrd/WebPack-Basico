import '../src/styles.css';
import { crearIndexHtml } from './js/index-page';
import { initChistes } from './js/chistes-page';
import { initUsuarios } from './js/usuarios-page';

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
