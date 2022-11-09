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

<<<<<<< HEAD
  const createPet = (data) => {
    console.log(data);
    Api.post("/pet", data)
      .then((res) => {
        Api.defaults.headers.common.Authorization = `Bearer ${token}`;
        console.log(pets);
        toast.success("Pet cadastrado com sucesso!", { autoClose: 2000 });
      })
      .catch((err) => {
        toast.error("Não foi possível cadastrar o pet", { autoClose: 2000 });
        console.error("Esse é o erro", err);
      });
  };

  const updatePet = (data) => {
    console.log(data);
    Api.patch(`/pet/${pet.id}`, data)
      .then((res) => {
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

  const modalCreatePetClose = () => {
    setIsCreateOpenModal(false);
  };

  useEffect(() => {
    Api.get("/pet/adoptable").then((res) => setPets(res.data));
  }, []);

  function openModal() {
    setOpenModalAdopt(true);
  }

  function closeModal() {
    setOpenModalAdopt(false);
  }
=======
  const createPet = (data) =>{
    Api.post("/pet", data)
    .then((res)=>{
      Api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setPets(previous => [...previous, data])
      toast.success("Pet cadastrado com sucesso!", { autoClose: 2000 });
    })
    .catch((err)=> {
      toast.error("Não foi possível cadastrar o pet", { autoClose: 2000 });
      console.error("Esse é o erro", err);
    })
  }

    async function getInfoPet(){
      try {
        await Api.get(`/pet`)
      } catch (error) {
        console.error(error);
      }
    }

    const modalCreatePetOpen = () =>{
      setIsCreateOpenModal(true)
    }
>>>>>>> 1c25a2cb4cba5540a0d3a129217d0350779f951f

  function handleModalPetOpen() {
    setModalPetIsOpen(true);
  }

<<<<<<< HEAD
  function handleModalPetClose() {
    setModalPetIsOpen(false);
  }
=======
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
>>>>>>> 1c25a2cb4cba5540a0d3a129217d0350779f951f

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
