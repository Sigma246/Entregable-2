'use strict';
import Usuario from '../model/users';
import { testingDB } from '../../connections/mongoose';
import { find, generate } from './users_service';

beforeAll(async () => await testingDB.create());
beforeAll(async () => await testingDB.connect());
beforeAll(async () => await testingDB.clear());
afterAll(async () => await testingDB.close());

describe('Users services', () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const paginate: any ={
        pagina: 0,
        limite: 1
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const defaultData: any ={
        email: "correo1@hotmail.com",
        nombre: "nombreeeee",
      }

  it('List users', async () => {
    jest.spyOn(Usuario, 'find').mockRejectedValue(new Error());
    await expect(generate(defaultData)).not.toBeNull();
    await expect( find(paginate) ).resolves.not.toEqual( expect.objectContaining({code: 403}) );
  });
 
})