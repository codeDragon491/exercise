import { DataService } from './data.service';
import { UsersActions } from './users.actions';
import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersEpic {

    constructor(private dataService: DataService) { }

    getData = (action$: ActionsObservable<any>) => {
        return action$.ofType(UsersActions.GET_DATA) // Listen for this action
            .mergeMap(({ payload }) => { // payload: ( val1: "" ): When this action is activated, call ws through service class
                return this.dataService.getData(payload)
                    .map((result) => ({ // when web service responds with success, call this action with payload that came back from webservice
                        type: UsersActions.RECEIVED_DATA,
                        payload: result
                    }))
                    .catch(error => Observable.of({ // when web service responds with failure, call this action with payload that came back from webservice
                        type: UsersActions.FAILED_RECEIVED_DATA,
                        payload: error
                    }));
            });
    }
}