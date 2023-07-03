import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private HomeService: HomeService) { }

  connect(){
    this.HomeService.countSocketSession()
  }

  ngOnInit() {
  }

}
