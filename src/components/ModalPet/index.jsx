import { useContext, useState } from "react";
import ReactModal from "react-modal";
import { ModalContainer } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { petContext } from "../../context/petContext";
import { userContext } from "../../context/userContext";

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
  const [editPage, setEditPage] = useState(false);

  function handleEditPageOpen() {
    setEditPage(true);
  }
  function handleEditPageClose() {
    setEditPage(false);
  }

  const { modalPetIsOpen, handleModalPetClose, modalPetOverview } =
    useContext(petContext);
  const { owner, user } = useContext(userContext);

  console.log(owner);

  return (
    <>
      {/* <button onClick={handleModalPetOpen}>Open Modal</button> */}
      <ReactModal
        isOpen={modalPetIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={handleModalPetClose}
        style={customStyles}
      >
        <ModalContainer>
          <button className="button-close" onClick={handleModalPetClose}>
            <AiFillCloseCircle />
          </button>
          {modalPetOverview.user_register === user.id ? (
            <button
              className="button-edit"
              onClick={() => setEditPage(!editPage)}
            >
              <AiTwotoneEdit />
            </button>
          ) : (
            <></>
          )}
          {editPage ? (
            <>
              <figure>
                {modalPetOverview?.info_pet?.pet_image ? (
                  <img src={modalPetOverview?.info_pet?.pet_image} alt="" />
                ) : (
                  <img
                    src="https://s2.glbimg.com/uBZ1jg_a6wHH5otEeT6CSKiCBjU=/e.glbimg.com/og/ed/f/original/2022/04/20/teste-descubra-qual-pet-mais-combina-com-voce-vida-de-bicho.png"
                    alt="Foto do pet"
                  />
                )}
              </figure>
              <div className="modal-info-pet">
                <h2>{modalPetOverview.name}</h2>
                <div>
                  <span>{modalPetOverview.info_pet?.species}</span>
                  <span> {modalPetOverview.info_pet?.size}</span>
                </div>

                <span>{modalPetOverview.age}</span>
                <span>{modalPetOverview.gender}</span>
                {modalPetOverview.info_pet?.description ? (
                  <p>{modalPetOverview.info_pet.description}</p>
                ) : (
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia earum dolore recusandae quia. Aliquam dolores,
                    necessitatibusipsa deleniti sed impedit, natus facere quia
                    nam quasi, voluptatibus tenetur fugit non?
                  </p>
                )}

                <div className="contact">
                  <p>{owner?.contact?.phone}</p>
                  <p>{owner?.email}</p>
                  <p>{owner.contact?.secondary_email}</p>
                  <p>{owner.contact?.whatsapp}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <form>
                {/* description, name, pet_image, size, vaccine, age  */}
                <input type="text" placeholder="Name" />
              </form>
            </>
          )}
        </ModalContainer>
      </ReactModal>
    </>
  );
};
export default ModalPet;
