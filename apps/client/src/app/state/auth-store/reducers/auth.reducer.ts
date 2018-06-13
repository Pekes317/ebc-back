import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { UserState } from '../models/user-state.model';

export interface State {
  status: UserState;
}

export const initialState: State = {
  status: {
    loggedIn: false,
    token: '',
    role: ''
  }
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionTypes.LoadAuths:
      return { 
        ...state
       };


    default:
      return state;
  }
}

export const getAuthStatus = (state: State) => state.status;
