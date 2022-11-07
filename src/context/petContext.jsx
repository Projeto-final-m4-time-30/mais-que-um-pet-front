import { createContext } from "react";

export const petContext = createContext({});

export const PetProvider = ({ children }) => {
  return <petContext.Provider value={{}}>{children}</petContext.Provider>;
};
