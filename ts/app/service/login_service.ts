'use strict';

import Usuario from '../model/users';


interface data {
    nombre: string;
    email: string;
}

// find user login
export const find = (data: data) => Usuario.findOne({ email: data.email })
    .then(res =>  res  ||  Promise.reject({ data: data, message: "Usuario no registrado / Password incorrecto " }) )
    .catch(e => { throw ({ code: 403, error: e }) })