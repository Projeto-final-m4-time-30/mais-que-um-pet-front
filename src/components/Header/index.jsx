import { useContext } from "react";
import { userContext } from "../../context/userContext.jsx";
import { HeaderStyle } from "./styles.js";

export const Header = () => {
  const { logout } = useContext(userContext);

  return (
    <HeaderStyle>
      <div>
        <h1>Mais Que Um Pet</h1>
        <nav>
          <img
            src="https://st.depositphotos.com/1146092/2108/i/600/depositphotos_21082823-stock-photo-fitness-dog.jpg"
            alt="Foto de user"
          />
          <div>
            <button onClick={logout}>Logout</button>
          </div>
        </nav>
      </div>
    </HeaderStyle>
  );
};
