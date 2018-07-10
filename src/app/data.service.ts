import { Injectable } from '@angular/core';
import { Data } from './data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

@Injectable()

export class UsersService {

  constructor(private http: HttpClient, private data: Data) { }

  getData(arg): Observable<any> {
    return this.data.createPerson(arg)
      .flatMap((person: any) => Observable.forkJoin(this.data.getFacility(person.val1), this.data.getExposure(person.val2)))
      .map(([facility, exposure]) => facility.val3 * exposure.val5)
  }
}
