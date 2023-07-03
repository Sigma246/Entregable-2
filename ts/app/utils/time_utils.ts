/* eslint-disable @typescript-eslint/ban-ts-comment */
'use strict';

export const time = () => new Promise((resolve) => resolve( new Date( new Date().getTime() - (1000 * 60 * 60) ).toLocaleString("en-US", { timeZone: "America/Mexico_City" }) ));

export const msToTime = (date_out: Date, date_in: Date) => new Promise((resolve) => {
    const duration = date_out.getTime()  - date_in.getTime();

    // @ts-ignore
    const seconds = parseInt((duration / 1000) % 60),
    // @ts-ignore
        minutes = parseInt((duration / (1000 * 60)) % 60),
    // @ts-ignore
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    const new_hours = (hours < 10) ? "0" + hours : hours,
        new_minutes = (minutes < 10) ? "0" + minutes : minutes,
        new_seconds = (seconds < 10) ? "0" + seconds : seconds;

    resolve(new_hours + ":" + new_minutes + ":" + new_seconds)
});