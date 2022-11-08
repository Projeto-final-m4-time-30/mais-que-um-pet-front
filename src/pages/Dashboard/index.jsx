import ListaPets from "../../components/cardPets/cardPetsComponets";
import { Header } from "../../components/Header";
import { BiMessageAltAdd } from "react-icons/bi";
import { ContainerPesquisa } from "./styles";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { Navigate, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const { user, loading } = useContext(userContext);
  // const navigate = useNavigate();

  // if (!user) {
  //   navigate("/signin", { replace: true });
  // }
  console.log(user);
  if (loading) return <p>Loading...</p>;

  return user ? (
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
  ) : (
    <h1>Carregando...</h1>
  );
};

export default Dashboard;