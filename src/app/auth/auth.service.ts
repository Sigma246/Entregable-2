import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SessionService {
	
	isLoggedIn = false;
	constructor() { }

	isAuthenticated(): boolean{
		if(sessionStorage.getItem('token')){
			return this.isLoggedIn = true;
		}else{
			return this.isLoggedIn
		}
	}

}
