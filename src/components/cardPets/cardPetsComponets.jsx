import { useContext, useEffect, useState } from "react";
import { Card } from "./styled";
import { DivBotao } from "./styled";
import { ListCards } from "./styled";
import { Api } from "../../services/index";
import { userContext } from "../../context/userContext";
import { petContext } from "../../context/petContext";
import ModalAdopt from "../ModalAdopt";

function ListaPets() {
  const { user } = useContext(userContext);
  const { openModal, pets, setPet } = useContext(petContext);

  const { handleModalPetOpen, setModalPetOverview } = useContext(petContext);
  const { setOwnerId } = useContext(userContext);

  function openModalSetId(id) {
    openModal();
    const pet = pets.find((p) => p.id === id);
    setPet(pet);
  }

  return Object.keys(pets).length > 0 ? (
    <>
      <ListCards>
        {pets.map((pet) => (
          <Card
            key={pet.id}
            id={pet.id}
            onClick={() => {
              console.log(pet.user_register);
              setOwnerId(() => pet.user_register);
              setModalPetOverview(pet);
              handleModalPetOpen();
            }}
          >
            <figure>
              {pet.info_pet.pet_image !== "" ? (
                <img src={pet.info_pet.pet_image} alt="Foto do pet" />
              ) : (
                <img
                  src="https://s2.glbimg.com/uBZ1jg_a6wHH5otEeT6CSKiCBjU=/e.glbimg.com/og/ed/f/original/2022/04/20/teste-descubra-qual-pet-mais-combina-com-voce-vida-de-bicho.png"
                  alt="Foto do pet"
                />
              )}
            </figure>

            <div>
              <h2>{pet.name}</h2>
            </div>
            {user.id === pet.user_register && (
              <DivBotao>
                <button
                  onClick={(e) =>
                    openModalSetId(e.target.parentNode.parentNode.id)
                  }
                >
                  Doar
                </button>
              </DivBotao>
            )}
          </Card>
        ))}
      </ListCards>
      <ModalAdopt />
    </>
  ) : (
    <h2>Não existe pet para adoção</h2>
  );
}

export default ListaPets;
