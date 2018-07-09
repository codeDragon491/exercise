import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { usersReducer } from './../users.reducer';


export class UsersState {
    results = [];
}

export class IAppState {
    users?: UsersState;
}

export const rootReducer = combineReducers<IAppState>({
    users: usersReducer,
    // when you add more reducers, add them here..

    router: routerReducer
});
