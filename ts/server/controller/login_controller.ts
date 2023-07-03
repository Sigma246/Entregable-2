/* eslint-disable @typescript-eslint/no-explicit-any */
import { find as findservice } from '../../app/service/login_service';
import jwt from "jsonwebtoken"
import { header, secret, auth } from '../../config/jwt';

export const find = (req: any, res: any) => findservice(req.body)
  .then(user => {
    const key = jwt.sign({ user }, secret, auth)
    res.header(header, key).io({
      code: 200,
      message: "success.find_user",
      data: { user }
    })
  })
  .catch(error =>
    res.io({
      code: 500,
      message: "error.find_user",
      data: { error }
    })
  );