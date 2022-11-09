import { createContext, useEffect, useState } from "react";
import { Api } from "../services";

export const petContext = createContext({});

export const PetProvider = ({ children }) => {
  const [openModalAdopt, setOpenModalAdopt] = useState(false);
  const [pets, setPets] = useState([]);
  const [pet, setPet] = useState();
  const [modalPetIsOpen, setModalPetIsOpen] = useState(false);
  const [modalPetOverview, setModalPetOverview] = useState({});

  useEffect(() => {
    Api.get("/pet/adoptable").then((res) => setPets(res.data));
  }, []);

  function openModal() {
    setOpenModalAdopt(true);
  }

  function closeModal() {
    setOpenModalAdopt(false);
  }

  function handleModalPetOpen() {
    setModalPetIsOpen(true);
  }

  function handleModalPetClose() {
    setModalPetIsOpen(false);
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
        modalPetIsOpen,
        handleModalPetClose,
        handleModalPetOpen,
        modalPetOverview,
        setModalPetOverview,
      }}
    >
      {children}
    </petContext.Provider>
  );
};
