import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/observable/forkJoin';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  
  apiUrl1: string = 'http://localhost:3000/person/?';
  apiUrl2: string = 'http://localhost:3000/facility/?';
  apiUrl3: string = 'http://localhost:3000/exposure/?';

  constructor(private http: HttpClient) { }

   getData(arg): Observable<any> {
    return this.http.get(this.apiUrl1 + arg.data)
      .flatMap((person: any) => Observable.forkJoin(this.http.get(this.apiUrl2 + person.val1), this.http.get(this.apiUrl3 + person.val2)))
      .map(([facility, exposure]) => facility.val3 * exposure.val5)
  }
}
