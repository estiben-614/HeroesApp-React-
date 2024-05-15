import { types } from "./types";

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
  case types.login:
    return {
      ...state,
      logged: true,
    };
  case types.logout:
    return {
      ...state,
      logged: false,
    };        
    
    
  default:
    return state;
  }
};