'use strict';
/**************************************************************************
 * Configuration server constants                                         *
 *                                                                        *
                            *
 **************************************************************************/


/**
 * Default service configuration
 *
 * @type {Object}
 */

interface ENV {
    BASEURL: string;
    FRONTENDURL: string;
    PORT: number;
    HOST: string;
}


export const config: ENV = {

    BASEURL: process.env.BASE_URL || "http://localhost:3000/",
    FRONTENDURL: process.env.FRONT_END_URL || "http://localhost:8081/",
    PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
    HOST: process.env.HOST || "http://localhost/"
    
};


