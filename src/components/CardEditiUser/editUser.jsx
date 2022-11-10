
import { useContext} from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userContext } from "../../context/userContext";

import ReactModal from "react-modal";
import { Container } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import Input from "../Input";

function EditUser() {
  const {
   
    closeModal,
    editUser,
    isUpdatedOpenModal,
  } = useContext(userContext);
  
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
  const formSchemma = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    user_image: yup.string(),
    password: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemma),
  });

  return (
    <>
      <ReactModal
        isOpen={isUpdatedOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Container>
          <div>
            <button className="button-close" onClick={closeModal}>
              <AiFillCloseCircle className="buttonX" />
            </button>
          </div>
          <form onSubmit={handleSubmit(editUser)}>
            <header>
              <h1>Atualizar usuario</h1>
            </header>

            <div>
              <label>nome</label>
              <Input {...register("name")}></Input>
              {errors.name && errors.name.message}
            </div>

            <div>
              <label>email</label>
              <Input {...register("email")}></Input>
            </div>

            <div>
              <label>user_image</label>
              <Input {...register("user_image")}></Input>
            </div>

            <button type="submit">Atualizar</button>
          </form>
        </Container>
      </ReactModal>
    </>
  );
}
 
export default EditUser