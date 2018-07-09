import { UsersActions } from './users.actions';
import { UsersState } from './store/store';
import { tassign } from 'tassign';

const INITIAL_STATE: UsersState = { results: [] };

export function usersReducer(state: UsersState = INITIAL_STATE, action: any) {

    switch (action.type) {

        case UsersActions.GET_DATA:
            return state;
        case UsersActions.RECEIVED_DATA:

            return tassign(state, { results: action.payload });
        case UsersActions.FAILED_RECEIVED_DATA:
            return state;

        default:
            return state

    }
}

