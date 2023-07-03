'use strict';
import Usuario from '../model/users';
import { testingDB } from '../../connections/mongoose';
import { find } from './login_service';
import { generate } from './users_service';

beforeAll(async () => await testingDB.create());
beforeAll(async () => await testingDB.connect());
beforeAll(async () => await testingDB.clear());
afterAll(async () => await testingDB.close());



describe('Login services', () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const defaultData: any ={
    email: "correo@hotmail.com",
    nombre: "nombreeeee",
  }

  it('create, new user', async () => {
    jest.spyOn(new Usuario, 'save').mockReturnValue(defaultData);
    await expect(generate(defaultData)).not.toBeNull();
  });

  it('find ERROR,  new user', async () => {
    jest.spyOn(Usuario, 'find').mockRejectedValue(new Error());
    await expect( find({
      nombre: '',
      email: ''
    }) ).rejects.toEqual( expect.objectContaining({code: 403}) );
  });
 
})