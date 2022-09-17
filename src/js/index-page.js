const body = document.body;


export const crearIndexHtml = () => {

    const html = `
    <div class="d-flex align-items-center justify-content-between">
        <h1 class="tit3">Aplicaciones de peticiones http</h1>
        <img src="./assets/img/servidor.png" alt="Logo" class="logo3">
    </div>
    <hr>
    <img src="./assets/img/exjs.png" alt="Logo" class="logo-index">
    <hr>
    <br>
    <div class="d-flex justify-content-around">
        <div class="d-flex justify-content-around">
            <img src="./assets/img/logo.png" alt="Logo" class="logo-bot-ind">
            <button class="btn btn-dark" id="chistes">Chistes Chuk Norris</button>
        </div>
        <div class="d-flex justify-content-center">
            <img src="./assets/img/usuarios.png" alt="Logo" class="logo-bot-ind">
            <button class="btn btn-dark" id="usuarios">Lista de Usuarios</button>
        </div>
    </div>
    <div class="by">by: LcrPrograming</div>
    `
    const divIndex = document.createElement('div');
    divIndex.innerHTML = html;
    body.append(divIndex);
    
}



