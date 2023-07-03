import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListadoService } from '../listado/service/listado.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ListadoService: ListadoService
  ) {
    
    this.form = formBuilder.group({
      nombre: '',
    })

    this.form.valueChanges.subscribe(({nombre}) => {
      console.log('cambio', nombre)
      this.ListadoService.listUsers( this.ListadoService.pagina, nombre)
    });
  }
}