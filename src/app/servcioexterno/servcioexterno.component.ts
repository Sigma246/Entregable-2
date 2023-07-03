import { Component, OnInit } from '@angular/core';
import { ServicioexternoService } from './servicioexterno.service';




@Component({
  selector: 'app-servcioexterno',
  templateUrl: './servcioexterno.component.html',
  styleUrls: ['./servcioexterno.component.css']
})
export class ServcioexternoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'userId', 'title', 'body'];
  dataSource = [];

  constructor(
    private ServicioexternoService: ServicioexternoService
  ) { }

  dataexterno(){
    this.ServicioexternoService.data.subscribe(res=>{
      this.dataSource = res.body.list;
    })
  }

  list(){
    this.ServicioexternoService.listExterno()
  }

  ngOnInit() {
    this.list()
    this.dataexterno()
  }

}
