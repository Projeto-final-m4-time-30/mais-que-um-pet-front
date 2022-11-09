import ReactModal from "react-modal";

const { useState } = require("react");

const customStyles = {
    content: {
      width: "700px",
      maxWidth: "85%",
      height: "90%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

const ModalCreatePet = () =>{
    const [openIsModal, setOpenIsModal] = useState(false)
    
    const openModalFn = () =>{
        setOpenIsModal(true)
    }

    const closeModalFn = () =>{
        setOpenIsModal(true)
    }
    return (

    )   
}

export default ModalCreatePet