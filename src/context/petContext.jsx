
import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import { Api } from "../services";

export const petContext = createContext({});

export const PetProvider = ({ children }) => {

  const [isCreateOpenModal, setIsCreateOpenModal] = useState(false)

  const token = localStorage.getItem("@TokenUser:token")

  const createPet = (data) =>{
    console.log(data)
    Api.post("/pet", data)
    .then((res)=>{
      Api.defaults.headers.common.Authorization = `Bearer ${token}`;
      toast.success("Pet cadastrado com sucesso!", { autoClose: 2000 });
    })
    .catch((err)=> {
      toast.error("Login e/ou senha inválidos", { autoClose: 2000 });
      console.error("Esse é o erro", err);
    })
  }

    const modalCreatePetOpen = () =>{
      setIsCreateOpenModal(true)
    }

    const modalCreatePetClose = () =>{
      setIsCreateOpenModal(false)
    }



  return (
    <petContext.Provider
      value={{
        createPet,
        modalCreatePetOpen,
        modalCreatePetClose,
        isCreateOpenModal,
        setIsCreateOpenModal
      }}
      >
        {children}
      </petContext.Provider>
  )

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
