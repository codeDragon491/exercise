import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Injectable()
export class Data {

    [x: string]: any;

    person = [{
        response: {
            val1: 1,
            val2: 2
        }
    }];
    facility = [
        { val1: 1 }, {
            response: {
                val3: 3,
                val4: 4
            }
        }];
    exposure = [
        { val2: 2 }, {
            response: {
                val5: 5
            }
        }]

    constructor() { }

    public createPerson(val: any) {
        this.person.push(val)
        return of(this.person[0].response)
    }
    public getFacility(val1: Number) {
        this.facility.find(x => x.val1 === val1);
        return of(this.facility[1].response);
    }
    public getExposure(val2: Number) {
        this.exposure.find(x => x.val2 === val2)
        return of(this.exposure[1].response);
    }
}
