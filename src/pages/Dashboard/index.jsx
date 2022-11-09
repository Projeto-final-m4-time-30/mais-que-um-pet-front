import ListaPets from "../../components/cardPets/cardPetsComponets";
import { Header } from "../../components/Header";
import { BiMessageAltAdd } from "react-icons/bi";
import { ContainerPesquisa } from "./styles";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import ModalCreatePet from "../../components/ModalCreatePet";
import { petContext } from "../../context/petContext";
import ModalAdopt from "../../components/ModalAdopt";
import ModalPet from "../../components/ModalPet";

const Dashboard = () => {
  const { user, loading } = useContext(userContext);
  const { modalCreatePetOpen } = useContext(petContext);

  const navigate = useNavigate();

  if (!user) {
    navigate("/signin", { replace: true });
  }

  if (loading) return <p>Loading...</p>;

  return user ? (
    <>
      <Header />
      <ModalAdopt />
      <ContainerPesquisa>
        <BiMessageAltAdd size={40} onClick={modalCreatePetOpen}/>
        <form action="">
          <input type="text" />
        </form>
      </ContainerPesquisa>
      <ListaPets />

      <ModalCreatePet />


      <ModalPet />

    </>
  ) : (
    <h1>Carregando...</h1>
  );
};

export default Dashboard;
