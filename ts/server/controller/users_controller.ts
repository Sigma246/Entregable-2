/* eslint-disable @typescript-eslint/no-explicit-any */
import { generate, find as findservice } from '../../app/service/users_service';

export const add = (req: any, res: any) => generate(req.body)
    .then(user => 
        res.header().io({
            code: 200,
            message: "success.create_user",
            data: { user }
        })
    )
    .catch(error =>
        res.io({
            code: 500,
            message: "error.create_user",
            data: { error }
        })
    );

export const find = (req: any, res: any) => findservice(req.query)
    .then(users =>
        res.header().io({
            code: 200,
            message: "success.find_users",
            data: { users }
        })
    )
    .catch(error =>
        res.io({
            code: 500,
            message: "error.find_user",
            data: { error }
        })
    );