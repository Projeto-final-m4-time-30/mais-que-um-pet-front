import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../services";
import { toast } from "react-toastify";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();
  const token = localStorage.getItem("@TokenUser:token");
  const userId = localStorage.getItem("@IdUser:user");


  const loginUser = (data) => {
    Api.post("/login", data)
      .then((response) => {
        const { user, accessToken } = response.data;
        Api.defaults.headers.common.Authorization = `Bearer ${token}`;
        localStorage.setItem("@TokenUser:token", accessToken);
        localStorage.setItem("@IdUser:user", user.id);
        toast.success("Login feito com sucesso!", { autoClose: 2000 });

        setUser(user)
        setLoading(true);
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        toast.error("Login e/ou senha inválidos", { autoClose: 2000 });
        console.error("Esse é o erro", error);
      });
  };

  useEffect(() => {
    async function loadUser() {
      if (token) {
        try {
          Api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const { data } = await Api.get(`/users/${userId}`);
          setUser(data);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
    }
    loadUser();
  }, [token, userId]);


  const logout = () => {
    localStorage.clear();
    toast.warning("Você está sendo deslogado", { autoClose: 2000 });
    navigate("/");
  };

  const registerUser = async (data) =>{
    console.log(data)

    try {
      await Api.post("/users", data);
      // navigate("/");
    } catch (error) {
      console.error("Ocorreu um erro durante a requisição de cadastro", error);
    }
  };

  const back = () => {
    navigate("/login");
  };
  

  return (
    <userContext.Provider
      value={{
        loginUser,
        registerUser,
        logout,
        loading,
        setLoading,
        user,
        setUser,
        back
      }}
      >
        {children}
      </userContext.Provider>
  )
};
