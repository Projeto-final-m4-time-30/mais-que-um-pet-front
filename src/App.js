import GlobalStyle from "./styles/GlobalStyle";
import RoutesTree from "./routes";

import { UserProvider } from "./context/userContext";
import { PetProvider } from "./context/petContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <PetProvider>
          <RoutesTree />
          <GlobalStyle />
        </PetProvider>
      </UserProvider>
    </div>
  );
}

export default App;
