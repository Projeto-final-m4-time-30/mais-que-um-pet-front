import { useState } from "react";
import ReactModal from "react-modal";
import { ModalContainer } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";

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

const ModalPet = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <ReactModal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalContainer>
          <button className="button-close" onClick={closeModal}>
            <AiFillCloseCircle />
          </button>
          <button className="button-edit">
            <AiTwotoneEdit />
          </button>
          <figure>
            <img
              src="https://static4.depositphotos.com/1011434/493/i/600/depositphotos_4939645-stock-photo-cute-puppy.jpg"
              alt=""
            />
          </figure>
          <div className="modal-info-pet">
            <h2>Pitoco</h2>
            <span>tipo</span>
            <span>idade</span>
            <span>sexo</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              earum dolore recusandae quia. Aliquam dolores, necessitatibus ab
              ipsa deleniti sed impedit, natus facere quia nam quasi,
              voluptatibus tenetur fugit non?
            </p>
            <div className="contact">
              <p>CONTATO</p>
              <p>EMAIL</p>
            </div>
          </div>

          <div></div>
        </ModalContainer>
      </ReactModal>
    </>
  );
};
export default ModalPet;
