import { useContext, useEffect, useState } from "react";
import ReactModal from "react-modal";
import { ModalContainerAdopt } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { petContext } from "../../context/petContext";
import { Api } from "../../services";
import { toast } from "react-toastify";

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

const urlImageDefault =
  "https://s2.glbimg.com/uBZ1jg_a6wHH5otEeT6CSKiCBjU=/e.glbimg.com/og/ed/f/original/2022/04/20/teste-descubra-qual-pet-mais-combina-com-voce-vida-de-bicho.png";

const ModalAdopt = () => {
  const { closeModal, openModalAdopt, pet } = useContext(petContext);
  const [email, setEmail] = useState();

  async function adoptPet() {
    Api.patch(`/pet/adopt/${pet.id}`, { email })
      .then((r) =>
        toast.success("Doação feita com sucesso!", { autoClose: 2000 })
      )
      .catch(() => toast.error("Email não cadastrado", { autoClose: 2000 }));
  }

  return (
    <ReactModal
      isOpen={openModalAdopt}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <ModalContainerAdopt>
        <button className="button-close" onClick={closeModal}>
          <AiFillCloseCircle />
        </button>
        <figure>
          <img
            src={
              pet?.info_pet.pet_image ? pet.info_pet.pet_image : urlImageDefault
            }
          />
        </figure>

        <h2>{pet?.name}</h2>
        <form>
          <label htmlFor="email">Email do donatário</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" onClick={adoptPet}>
            Doar
          </button>
        </form>
      </ModalContainerAdopt>
    </ReactModal>
  );
};
export default ModalAdopt;
