import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

constructor() { }

socket = io('http://localhost:3000/contador',{
  transports: ["websocket"],
  auth: { 'x-auth-token': sessionStorage.getItem('token') },
  query: { url: window.location.href, time: new Date().toLocaleString("en-US", {timeZone: "America/Mexico_City"}) },
  withCredentials: true,
});


public countSocketSession(){
  this.socket.on('connect', function(){});
}

}
