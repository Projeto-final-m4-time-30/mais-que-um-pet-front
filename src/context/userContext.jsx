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

  const registerUser = async (data) =>{
    console.log(data)
    Api.post('/users', data)
    .then((res) => {
        toast.success('Cadastro feito com sucesso! Faça o login.', { autoClose: 2000 })
        setTimeout(()=>{
            navigate('/signin', {replace: true})
        }, 1000)
    })
    .catch((err)=> toast.error('Algo deu errado! Confira todos os campos preenchidos', { autoClose: 2000 }))  
    // try {
    //   await Api.post("/users", data);
    //   navigate("/dashboard");
    // } catch (error) {
    //   console.error("Ocorreu um erro durante a requisição de cadastro", error);
    // }
  }

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
