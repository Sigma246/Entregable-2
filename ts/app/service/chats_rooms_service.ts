'use strict';

import Chats_rooms from '../model/chats_rooms';

// add message chat
export const add_chat = (data:any) => new Chats_rooms(data).save()
    .catch((e:any) => { throw { code: 403, message: "Mensaje no guardado", error: e } })

// change state chat
export const update_state_chat = (id:any, state:any) => Chats_rooms.findByIdAndUpdate(id, { '$set': state })
    .catch((e:any) => { throw { code: 403, message: "Mensaje no actualizado", error: e } })

// search message all 
export const search_all_chat = (data:any) => Chats_rooms.find(data)
    .sort({ 'createdAt': -1 })
    .limit(30)
    .catch((e:any) => { throw { code: 403, message: "Historial no actualizado", error: e } })
