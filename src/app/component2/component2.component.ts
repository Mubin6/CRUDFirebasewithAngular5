import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Input() name;
  data: Object;
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.appService.getComp2Data().subscribe(data => {
      console.log('data', data);
      this.data = data;
    });
  }

}
