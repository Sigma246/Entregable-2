import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ListadoComponent } from './listado/listado.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {JsonPipe} from '@angular/common';
import { PaginatorConfigurable } from './paginado/paginado.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports:[
    UsersComponent
  ],
  declarations: [
    UsersComponent,
    ListadoComponent,
    PaginatorConfigurable,
    BusquedaComponent
  ]
})
export class UsersModule { }
