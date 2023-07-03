import { Component, OnInit } from '@angular/core';
import { ListadoService } from './service/listado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/login/login-interface';

@Component({
  selector: 'users-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'email'];
  dataSource = [];
  data: any = [];
  formNewUser: FormGroup;
  myReactiveForm: any;

  constructor(
    private ListadoService: ListadoService,
    private formBuild: FormBuilder,
    ) { 
      this.formNewUser = formBuild.group({
        nombre: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      })
  }

  listUsers(){
    this.ListadoService.dataSource.subscribe((res: any)=>{
      this.dataSource = res;
    })
  }

  createUser(){
    const data: Login = {
      nombre: this.formNewUser.value.nombre,
      email: this.formNewUser.value.email,
    }
    this.ListadoService.createUser(data);
    this.formNewUser.reset();
  }

  ngOnInit() {
    this.listUsers();
  }

}
