import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useContext } from "react";
import { loginSchema } from "../../validators/index";
import Form from "../../components/Form/styles";
import { Container } from "./styles";
import { Button } from "../../components/Button/styles";
import { userContext } from "../../context/userContext";
import Input from "../../components/Input";

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
      <h3>Login</h3>
        <Form onSubmit={onSubmit}>
          <div className="divLogin">
            <label htmlFor="email">
              <Input
                type="email"
                id="email"
                placeholder="E-mail"
                {...register("email")}
              />
            </label>
            <span>{errors?.email?.message}</span>
            <label htmlFor="password">
              <Input
                type="password"
                id="password"
                placeholder="Senha"
                {...register("password")}
              />
            </label>
            <span>{errors?.password?.message}</span>
            <div>
              <Button type="submit" className="btnLogin">
                Entrar
              </Button>
            </div>
            <p>
              Ainda não tem cadastro?
              <a href="/users"> Cadastre-se aqui</a>
            </p>
          </div>
        </Form>
    </Container>
  );
};

export default Login;
