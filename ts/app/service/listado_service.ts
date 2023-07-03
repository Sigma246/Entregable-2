'use strict';

import axios from 'axios';


export const findservice = () =>
    axios({
        method: 'get',
        timeout: 3000,
        url: 'https://jsonplaceholder.typicode.com/posts',
    })
    .then( ({data}) => data);