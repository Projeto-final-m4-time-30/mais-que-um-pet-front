import ListaPets from "../../components/cardPets/cardPetsComponets";
import { Header } from "../../components/Header";
import { BiMessageAltAdd } from "react-icons/bi";
import { ContainerPesquisa } from "./styles";
const Dashboard = () => {
  return (
    <>
      <Header />
      <ContainerPesquisa>
        <BiMessageAltAdd size={40} />
        <form action="">
          <input type="text" />
        </form>
      </ContainerPesquisa>
      <ListaPets />
    </>
  );
};

export default Dashboard;
