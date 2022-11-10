import { useContext } from "react";
import { userContext } from "../../context/userContext.jsx";
import { HeaderStyle } from "./styles.js";

export const Header = () => {
  const { logout, openModal, user } = useContext(userContext);

  return (
    <HeaderStyle>
      <div>
        <h1>Mais Que Um Pet</h1>
        <nav >
          <img onClick={openModal}
            src={user?.user_image?.length > 0 ? user.user_image : "https://pbs.twimg.com/profile_images/985608345741680640/dWSsB4Qb_400x400.jpg" }
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
