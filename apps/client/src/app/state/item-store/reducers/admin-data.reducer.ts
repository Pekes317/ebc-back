import {
  AdminDataActions,
  AdminDataActionTypes
} from '../actions/admin-data.actions';

export interface State {
  loading: boolean;
}

export const initialState: State = {
  loading: false
};

export function reducer(state = initialState, action: AdminDataActions): State {
  switch (action.type) {
    case AdminDataActionTypes.AddAdminObj:
      return {
        ...state,
        loading: true
      };

    case AdminDataActionTypes.DeleteAdminObjs:
      return {
        ...state,
        loading: true
      };

    case AdminDataActionTypes.ErrorAdminObj:
      return {
        ...state,
        loading: false
      };

    case AdminDataActionTypes.FinishAdminObj:
      return {
        ...state,
        loading: false
      };

    case AdminDataActionTypes.LoadAdminObjs:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
