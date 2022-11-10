import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import { Api } from "../services";


export const petContext = createContext({});

export const PetProvider = ({ children }) => {
  const [isCreateOpenModal, setIsCreateOpenModal] = useState(false);
  const [openModalAdopt, setOpenModalAdopt] = useState(false);
  const [pets, setPets] = useState([]);
  const [pet, setPet] = useState();
  const [modalPetIsOpen, setModalPetIsOpen] = useState(false);
  const [modalPetOverview, setModalPetOverview] = useState({});

  const token = localStorage.getItem("@TokenUser:token");

  const createPet = (data) => {
    Api.post("/pet", data)
      .then((res) => {
        Api.defaults.headers.common.Authorization = `Bearer ${token}`;
        setPets((previous) => [...previous, data]);
        toast.success("Pet cadastrado com sucesso!", { autoClose: 2000 });
      })
      .catch((err) => {
        toast.error("Não foi possível cadastrar o pet", { autoClose: 2000 });
        console.error("Esse é o erro", err);
      });
  };

  const updatePet = (data) => {
    Api.patch(`/pet/${pet.id}`, data)
      .then((res) => {
        const index = pets.findIndex((actualPet) => actualPet.id === pet.id);
        const newPets = [...pets];
        newPets.splice(index, 1, res.data.pet_update);
        setPets(newPets);

        toast.success("Pet atualizado!", { autoClose: 2000 });
      })
      .catch((err) => {
        toast.error("Não foi possível atualizar o pet", { autoClose: 2000 });
        console.error("Esse é o erro", err);
      });
  };

  

  const modalCreatePetOpen = () => {
    setIsCreateOpenModal(true);
  };

  async function getInfoPet() {
    try {
      await Api.get(`/pet`);
    } catch (error) {
      console.error(error);
    }
  }

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
  const modalCreatePetClose = () => {
    setIsCreateOpenModal(false);
  };

  useEffect(() => {
    Api.get("/pet/adoptable").then((res) => setPets(res.data));
  }, []);

  return (
    <petContext.Provider
      value={{
        createPet,
        getInfoPet,
        modalCreatePetOpen,
        modalCreatePetClose,
        isCreateOpenModal,
        setIsCreateOpenModal,
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
        updatePet,
      }}
    >
      {children}
    </petContext.Provider>
  );
};
