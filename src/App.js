import GlobalStyle from "./styles/GlobalStyle.js";
import RoutesTree from "./routes";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/userContext";
import { PetProvider } from "./context/petContext";
import AppStyled from "./AppStyled.js";
import { Button } from "./components/Button/styles.js";

function App() {
  return <AppStyled>
    <span>Mais que um pet</span>
    <Button/>
  </AppStyled>;
}

export default App;
