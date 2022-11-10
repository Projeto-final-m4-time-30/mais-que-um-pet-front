import { useContext, useState } from "react";
import ReactModal from "react-modal";
import { ModalContainer } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { petContext } from "../../context/petContext";
import { userContext } from "../../context/userContext";
import Input from "../Input";
import { updatePetSchema } from "../../validators";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const customStyles = {
  content: {
    background: "var(--grey-0)",
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updatePetSchema),
  });

  const { modalPetIsOpen, handleModalPetClose, modalPetOverview, updatePet } =
    useContext(petContext);
  const { owner, user } = useContext(userContext);

  return (
    <>
      {/* <button onClick={handleModalPetOpen}>Open Modal</button> */}
      <ReactModal
        isOpen={modalPetIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => {
          handleModalPetClose();
          setEditPage(false);
        }}
        style={customStyles}
      >
        <ModalContainer>
          <button className="button-close" onClick={handleModalPetClose}>
            <AiFillCloseCircle className="buttonX" />
          </button>
          {modalPetOverview.user_register === user.id ? (
            <button
              className="button-edit"
              onClick={() => setEditPage(!editPage)}
            >
              <AiTwotoneEdit className="buttonE" />
            </button>
          ) : (
            <></>
          )}
          {!editPage ? (
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
                <div className="info-pet">
                  <h2>{modalPetOverview.name}</h2>
                  <div>
                    <span>{modalPetOverview.info_pet?.species}</span>
                    <span> {modalPetOverview.info_pet?.size}</span>
                  </div>

                  <span>Idade: {modalPetOverview.age}</span>
                  <span>Sexo: {modalPetOverview.gender}</span>
                  {modalPetOverview.info_pet?.description ? (
                    <p>Detalhes: {modalPetOverview.info_pet.description}</p>
                  ) : (
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia earum dolore recusandae quia. Aliquam dolores,
                      necessitatibusipsa deleniti sed impedit, natus facere quia
                      nam quasi, voluptatibus tenetur fugit non?
                    </p>
                  )}
                </div>

                <div className="contact">
                  <h2>Contato</h2>
                  <div>
                    <div>
                      <AiOutlinePhone className="contact-svg" />{" "}
                      <p>{owner?.contact?.phone}</p>
                    </div>

                    <div>
                      <AiOutlineMail className="contact-svg" />
                      <p>{owner?.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2>Edição</h2>
              <form className="form-edit" onSubmit={handleSubmit(updatePet)}>
                {/* description, name, pet_image, size, vaccine, age  */}
                <Input
                  type="text"
                  id="description"
                  placeholder="Descrição"
                  {...register("description")}
                  error={errors?.description}
                />
                <Input
                  type="text"
                  id="name"
                  placeholder="Nome"
                  {...register("name")}
                  error={errors?.name}
                />
                <Input
                  type="text"
                  id="pet_image"
                  placeholder="URL"
                  {...register("pet_image")}
                  error={errors?.pet_image}
                />
                <Input
                  type="text"
                  id="size"
                  placeholder="Tamanho"
                  {...register("size")}
                  error={errors?.size}
                />
                <Input
                  type="text"
                  id="age"
                  placeholder="Idade"
                  {...register("age")}
                  error={errors?.age}
                />
                <button className="form-button-edit">Salvar alteraçãoes</button>
              </form>
            </>
          )}
        </ModalContainer>
      </ReactModal>
    </>
  );
};
export default ModalPet;
