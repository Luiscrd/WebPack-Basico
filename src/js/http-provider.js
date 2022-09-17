const jokerUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=1'

// fetch(jokerUrl).then( resp => {

//     resp.json().then( data => {

//         console.log(data.id);
//         console.log(data.value);

//     });

// });

// fetch(jokerUrl).then( res => res.json()).then(console.log);

const obtenerChite = async () => {

    try {

        const resp = await fetch(jokerUrl);

        if (!resp.ok) throw 'No se pudo realizar la petición';

        const { id, icon_url, value } = await resp.json();

        return { id, icon_url, value };

    } catch (err) {

        throw err;

    }


}

const obtenerUsuarios = async () => {

    try {

        const resp = await fetch(urlUsuarios);

        if (!resp.ok) throw 'No se pudo realizar la petición';

        const { data:usuarios } = await resp.json();

        return usuarios;

    } catch (err) {

        throw err;

    }


}

export {
    obtenerChite,
    obtenerUsuarios
}

