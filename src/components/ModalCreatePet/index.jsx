import ReactModal from "react-modal";
import { Container } from "./styles";
import { AiFillCloseCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPetSchema } from "../../validators";
import Input from "../../components/Input";
import { Button } from "../Button/styles";
import { petContext } from "../../context/petContext";
import { useContext } from "react";

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
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(createPetSchema),
      });

    const {createPet, modalCreatePetClose, isCreateOpenModal} = useContext(petContext)
    
    return (
        <>
            <ReactModal
                isOpen={isCreateOpenModal}
                onRequestClose={modalCreatePetClose}
                style={customStyles}
            >
                <Container>
                    <div>
                        <button className="button-close" onClick={modalCreatePetClose}><AiFillCloseCircle className="buttonX" /></button>
                    </div>
                    <form onSubmit={handleSubmit(createPet)}>
                        <div>
                            <label htmlFor="name">
                                <Input
                                type="name"
                                placeholder="Nome do Pet"
                                {...register("name")}
                                />
                            </label>
                            <span>{errors?.name?.message}</span>
                            <label htmlFor="age">
                                <Input
                                type="age"
                                placeholder="Idade do Pet"
                                {...register("age")}
                                />
                            </label>
                            <span>{errors?.age?.message}</span>
                            <label htmlFor="gender">
                                <Input
                                type="gender"
                                placeholder="Gênero do Pet"
                                {...register("gender")}
                                />
                            </label>
                            <span>{errors?.gender?.message}</span>
                            <label htmlFor="pet_image">
                                <Input
                                type="pet_image"
                                placeholder="Foto do Pet"
                                {...register("info_pet.pet_image")}
                                />
                            </label>
                            <span>{errors?.pet_image?.message}</span>
                            <label htmlFor="size">
                                <Input
                                type="size"
                                placeholder="Tamanho do Pet"
                                {...register("info_pet.size")}
                                />
                            </label>
                            <span>{errors?.gender?.message}</span>
                            <label htmlFor="color">
                                <Input
                                type="color_pet"
                                placeholder="Cor do Pet"
                                {...register("info_pet.color")}
                                />
                            </label>
                            <span>{errors?.gender?.message}</span>
                            <label htmlFor="specie">
                                <Input
                                type="species"
                                placeholder="Espécie"
                                {...register("info_pet.species")}
                                />
                            </label>
                            <span>{errors?.gender?.message}</span>
                            <label htmlFor="description">
                                <Input
                                type="description"
                                placeholder="Descrição do Pet"
                                {...register("info_pet.description")}
                                />
                            </label>
                            <span>{errors?.gender?.message}</span>
                            <label htmlFor="vaccine">
                                <Input
                                type="vaccine"
                                placeholder="Vacinas"
                                {...register("info_pet.vaccine")}
                                />
                            </label>
                            <span>{errors?.gender?.message}</span>
                        </div>
                        <div>
                            <Button type="submit">Cadastrar Pet</Button>
                        </div>
                    </form>
                </Container>
            </ ReactModal>
        </>
    )   
}

export default ModalCreatePet