import GlobalStyle from "./styles/GlobalStyle.js";
import RoutesTree from "./routes";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/userContext";
import { PetProvider } from "./context/petContext";
import "react-toastify/dist/ReactToastify.min.css";
import ReactModal from "react-modal";

ReactModal.setAppElement(document.getElementById("root"));

function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <PetProvider>
          <RoutesTree />
         
          <GlobalStyle />
        </PetProvider>
      </UserProvider>
    </>
  );
}

export default App;
