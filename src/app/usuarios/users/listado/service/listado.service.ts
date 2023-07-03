import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Login } from 'src/app/login/login-interface';


@Injectable({
	providedIn: 'root'
})

export class ListadoService {
	dataSource = new Subject<any>();
	total = new Subject<number>();
	pageindex = new Subject<number>();
	pagina = 1;

	nafa = this.pageindex.subscribe(res =>{
		this.pagina = res;
	})

	constructor(
		private http: HttpClient,
	) { }


	listUsers(pagina:number, nombre:string = '') {

		return this.http.get('http://localhost:3000/user_list?pagina='+pagina+'&'+'limite='+10+'&'+'nombre='+nombre, {
			observe: 'response',
			headers: new HttpHeaders({
				// @ts-ignore
				'x-auth-token': sessionStorage.getItem('token')
			})
		}).subscribe((res: any) =>{
			this.total.next( res.body.users[0].metadata[0].total );
			this.dataSource.next( res.body.users[0].data );
			this.pageindex.next(pagina);
		});

	};

	createUser(usuario: Login){
		return this.http.post('http://localhost:3000/user_create',usuario,{
			observe: 'response',
			headers: new HttpHeaders({
				// @ts-ignore
				'x-auth-token': sessionStorage.getItem('token')
			})
		}).subscribe(res=>{
			this.listUsers( this.pagina )
		});
	}

}
