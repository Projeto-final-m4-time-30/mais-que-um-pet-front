import { useContext } from "react";
import { userContext } from "../../context/userContext.jsx";
import { HeaderStyle } from "./styles.js";

export const Header = () => {
  const { logout, user } = useContext(userContext);

  return (
    <HeaderStyle>
      <div>
        <h1>Mais Que Um Pet</h1>
        <nav>
          <img
            src={user.user_image}
            alt={user.user_name}
          />
          <div>
            <button onClick={logout}>Logout</button>
          </div>
        </nav>
      </div>
    </HeaderStyle>
  );
};
