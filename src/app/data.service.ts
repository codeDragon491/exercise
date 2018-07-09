import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  person;
  val3;
  apiUrl1: string = 'http://localhost:3000/person/?';
  apiUrl2: string = 'http://localhost:3000/facility/?';
  apiUrl3: string = 'http://localhost:3000/exposure/?';

  constructor(private http: HttpClient) { }

  getData(arg): Observable<any> {
    return this.http.get(this.apiUrl1 + arg.data)
      .map((response: any) =>
        this.person = response
      )
      .flatMap((response: any) => this.http.get(this.apiUrl2 + this.person.val1)
        .map((response: any) => {
          this.val3 = response.val3
        })
        .flatMap((response: any) => this.http.get(this.apiUrl3 + this.person.val2)
          .map((response: any) => response.val5 * this.val3)))
  }
}
