import { useEffect, useState } from "react";
import { Card } from "./styled";
import { DivBotao } from "./styled";
import { ListCards } from "./styled";
import { Api } from "../../services/index";

function ListaPets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    Api.get("/pet/adoptable").then((res) => setPets(res.data));
  });

  return Object.keys(pets).length > 0 ? (
    <ListCards>
      {pets.map((pet) => (
        <Card key={pet.id}>
          <figure>
            {
              pet.info_pet.pet_image !== '' ?
              <img src={pet.info_pet.pet_image} alt="Foto do pet" />
              :
              <img src='https://s2.glbimg.com/uBZ1jg_a6wHH5otEeT6CSKiCBjU=/e.glbimg.com/og/ed/f/original/2022/04/20/teste-descubra-qual-pet-mais-combina-com-voce-vida-de-bicho.png' alt="Foto do pet" />
            }
          </figure>

          <div>
            <h2>{pet.name}</h2>
          </div>
          <DivBotao>
            <button>Me Adote</button>
          </DivBotao>
        </Card>
      ))}
    </ListCards>
  ) : (
    <h2>Não existe pet para adoção</h2>
  );
}

export default ListaPets;
