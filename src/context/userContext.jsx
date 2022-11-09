import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../services";
import { toast } from "react-toastify";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const token = localStorage.getItem("@TokenUser:token");

  const loginUser = (data) => {
    Api.post("/login", data)
      .then((response) => {
        const { token } = response.data;
        Api.defaults.headers.common.Authorization = `Bearer ${token}`;
        localStorage.setItem("@TokenUser:token", token);
        toast.success("Login feito com sucesso!", { autoClose: 2000 });

        Api.get("/user").then((res) => setUser(res.data));

        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        toast.error("Login e/ou senha inválidos", { autoClose: 2000 });
        console.error("Esse é o erro", error);
      });
  };

  const registerUser = (data) => {
    Api.post("/users", data)
      .then(() => {
        toast.success("Cadastro feito com sucesso! Faça o login.", {
          autoClose: 2000,
        });
        navigate("/signin", { replace: true });
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("Algo deu errado! Confira todos os campos preenchidos", {
          autoClose: 2000,
        });
      });
  };

  useEffect(() => {
    async function loadUser() {
      if (token) {
        try {
          Api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const { data } = await Api.get(`/user`);
          setUser(data);
          navigate("/dashboard", { replace: true });
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const logout = () => {
    localStorage.clear();
    toast.warning("Você está sendo deslogado", { autoClose: 2000 });
    navigate("/signin");
  };

  const back = () => {
    navigate("/signin");
  };

  return (
    <userContext.Provider
      value={{
        loginUser,
        registerUser,
        logout,
        user,
        loading,
        setUser,
        back,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
