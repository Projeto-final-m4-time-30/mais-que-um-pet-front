import { createContext, useState } from "react";
import { toast } from "react-toastify";
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
};
