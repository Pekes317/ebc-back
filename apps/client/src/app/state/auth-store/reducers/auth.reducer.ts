import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { User } from '../../../core/models/user.model';
import { UserState } from '../models/user-state.model';

export interface State {
  status: UserState;
  user: User | null;
}

export const initialState: State = {
  status: {
    loggedIn: false,
    token: '',
    role: ''
  },
  user: null
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionTypes.LoadAuth:
      return { 
        ...state,
        status: action.payload.userState,
        user: action.payload.user
       };

    case AuthActionTypes.Logout:
       return initialState;
    

    default:
      return state;
  }
}
