import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store/store';

@Injectable()
export class UsersActions {
    constructor(private ngRedux: NgRedux<IAppState>) { }

    // Available actions
    static GET_DATA: string = 'GET_DATA';
    static RECEIVED_DATA: string = 'RECEIVED_DATA';
    static FAILED_RECEIVED_DATA: string = 'FAILED_RECEIVED_DATA';

    getData(val): void {
        this.ngRedux.dispatch({
            type: UsersActions.GET_DATA,
            payload: data
        });
    }
}
