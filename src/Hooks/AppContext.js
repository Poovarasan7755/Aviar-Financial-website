import React, { useState, useMemo, createContext, useContext } from "react";
import Services from "../Services";

export const AppContextProvider = ({ children }) => {
  const login = (payload) => {
    //payload = {email,password}
    console.log("payload context", payload);
    Services.login(payload)
      .then((res) => {
        console.log("res", res);
        //Navigate
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const logOut = () => {};

  const memoedValue = useMemo(
    () => ({
      login,
      logOut,
    }),
    []
  );
  return <AppContext.Provider value={memoedValue}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const ctx = useContext(AppContext);
  return {
    ...ctx,
  };
}

export const AppContext = createContext();
export default AppContext;
