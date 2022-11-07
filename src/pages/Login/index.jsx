import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useContext } from "react";
import { loginSchema } from "../../validators/index";
import Form from "../../components/Form/styles";
import { Container } from "./styles";
import { Button } from "../../components/Button/styles";
import { userContext } from "../../context/userContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { loginUser } = useContext(userContext);

  const onError = () => toast.error("Campo obrigatório!", { autoClose: 2000 });

  const onSubmit = handleSubmit(loginUser, onError);

  return (
    <Container>
      <section>
        <div className="global-login-div">
          <div className="divLogo">
          </div>

          <div className="modalLogin">
            <h3>Login</h3>

            <Form onSubmit={onSubmit}>
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  {...register("email")}
                />
              </label>
              <span>{errors?.email?.message}</span>

              <label htmlFor="password">
                <input
                  type="password"
                  id="password"
                  placeholder="Senha"
                  {...register("password")}
                />
              </label>
              <span>{errors?.password?.message}</span>

              <Button type="submit" className="btnLogin">
                Entrar
              </Button>
              <p>
                Ainda não tem cadastro?
                <a href="/users"> Cadastre-se aqui</a>
              </p>
            </Form>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Login;
