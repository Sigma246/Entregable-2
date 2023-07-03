'use strict';

import {findservice} from './listado_service';

describe('List services', () => {

  it('find List service', async () => {     
    expect( await findservice().then(res=> res.length) ).toEqual(100);
  });

});