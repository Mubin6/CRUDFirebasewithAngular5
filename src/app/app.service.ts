import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getComp1Data() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
  getComp2Data() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }

}
