import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";

export const AuthProvider = (
  {children},
) => {
  const [authState, dispatch] = useReducer(AuthReducer, {});
  return (
    <AuthContext.Provider
      value={{
        authState,
        dispatch,
      }}
    >
      {
        children
      }
    </AuthContext.Provider>
  );
};