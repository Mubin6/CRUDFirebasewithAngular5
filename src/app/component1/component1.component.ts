import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
   name = 'Vaibhav Nerle';
  data: Object;
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.appService.getComp1Data().subscribe(data => {
      console.log('data', data);
      this.data = data;
    });
  }

}
