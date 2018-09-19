import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTPStatus } from './Loader/http-status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  HTTPActivity: boolean;
  constructor(
    private router: Router,
    private httpSts: HTTPStatus
  ) {}

  ngOnInit() {
    this.httpSts.getHttpStatus().subscribe((status: boolean) => {
      this.HTTPActivity = status;
      console.log('Loader Status....', status);
    } );
  }

  comp1() {
    this.router.navigate(['/comp1']);
  }
comp2() {
  this.router.navigate(['/comp2']);
}
}
