import { createContext, useEffect, useState } from "react";
import { Api } from "../services";

export const petContext = createContext({});

export const PetProvider = ({ children }) => {
  const [openModalAdopt, setOpenModalAdopt] = useState(false);
  const [pets, setPets] = useState([]);
  const [pet, setPet] = useState();

  useEffect(() => {
    Api.get("/pet/adoptable").then((res) => setPets(res.data));
  }, []);

  function openModal() {
    setOpenModalAdopt(true);
  }

  function closeModal() {
    setOpenModalAdopt(false);
  }
  return (
    <petContext.Provider
      value={{
        openModal,
        closeModal,
        openModalAdopt,
        pets,
        pet,
        setPet,
      }}
    >
      {children}
    </petContext.Provider>
  );
};
