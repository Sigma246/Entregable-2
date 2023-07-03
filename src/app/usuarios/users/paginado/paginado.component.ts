import {Component, OnInit} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ListadoService } from '../listado/service/listado.service';

/**
 * @title Configurable paginator
 */
@Component({
  selector: 'listado-paginator-configurable',
  templateUrl: 'paginado.component.html',
  styleUrls: ['paginado.component.css'],
})
export class PaginatorConfigurable implements OnInit {

  constructor(private ListadoService: ListadoService) {}

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = false;
  showFirstLastButtons = false;
  disabled = false;

  pageEvent: PageEvent | undefined;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.ListadoService.listUsers(this.pageIndex*10);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  ngOnInit() {
    this.ListadoService.total.subscribe( res => {
      this.length = res
    } );
    this.ListadoService.listUsers(this.pageIndex)
  }
}
