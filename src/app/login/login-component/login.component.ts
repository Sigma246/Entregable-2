import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SessionService } from 'src/app/auth/auth.service';
import { Login } from '../login-interface';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  formLogin: FormGroup;
  subRef$: Subscription | undefined;

  constructor(
    private formBuild: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private SessionService: SessionService
  ) {
    this.formLogin = formBuild.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  Login(){
    const usuarioLogin: Login = {
      nombre: this.formLogin.value.nombre,
      email: this.formLogin.value.email,
    }

    this.http.post(
      'http://localhost:3000/login',
      usuarioLogin,
      {observe: 'response'})
      .subscribe(res=>{
        const token: any = res.headers.get('x-auth-token');
        console.log('TOKENNNNN', token);
        sessionStorage.setItem('token', token);
        this.SessionService.isLoggedIn = true;
        this.router.navigate(['/home']);
      }, err => {console.error('ERROR DE LOGIN' ,err);});
  }

  ngOnDestroy(){
    if(this.subRef$){
      this.subRef$.unsubscribe();
    }
  }

}
