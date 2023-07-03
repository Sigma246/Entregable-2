import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ServicioexternoService {

	data = new Subject<any>();
	constructor(private http: HttpClient) { }

	listExterno() {

		return this.http.get('http://localhost:3000/listado', {
			observe: 'response',
			headers: new HttpHeaders({
				// @ts-ignore
				'x-auth-token': sessionStorage.getItem('token')
			})
		}).subscribe((res: any) => {
			this.data.next(res);
			console.log("resultado", res)
		});

	};

}
