/* eslint-disable @typescript-eslint/ban-ts-comment */
'use strict';

import Usuario from '../model/users';
import {find as findLogin} from './login_service';

interface data {
    nombre: string;
    email: string;
}

interface paginate {
    pagina: number;
    limite: number;
    nombre: string;
}

// add user login
export const generate = (data: data) => new Usuario(data).save()
    .catch((e: string) => { throw { code: 403, message: "¡El usuario ya está registrado!", error: e } })

const userDefault = (data: data) => findLogin(data)
    .then(res => res)
    .catch( () => generate(data) )
    .then(res => res);


userDefault({
    email: "admin@hotmail.com",
    nombre: "admin",
})

export const find = async (paginate: paginate) =>{ 
        const pagina = Number(paginate.pagina) || 0;
        const limite = Number(paginate.limite) || 10;
        const nombre = paginate.nombre || '';
        const todod = await Usuario.aggregate([
            {$match: {nombre: {$regex: nombre}}},
            {$sort: {nombre: 1 } },
            {$facet: {
                // @ts-ignore
                metadata: [ { $count: "total" } ],
                data: [ { $skip: pagina }, { $limit: limite } ]
                }
            }
        ]);
        return todod;

}