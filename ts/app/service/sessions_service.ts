'use strict';

import Sessions from '../model/sessions';

// add user login
export const add_sessions = (data:any) =>
    Sessions.findOneAndUpdate({ email: data.email, location: data.location, date_in: data.date_in }, { $set: data }, { upsert: true })
        .catch(e => { throw { code: 403, message: "Sesion add_sessions", error: e } })