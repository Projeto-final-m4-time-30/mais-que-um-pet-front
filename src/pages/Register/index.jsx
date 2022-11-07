import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { registerSchema } from "../../validators";
import Form from "../../components/Form/styles";
import { Container } from "./styles";
import { Button } from "../../components/Button/styles";
import Input from "../../components/Input";
import { userContext } from "../../context/userContext";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { registerUser, back } = useContext(userContext);

  return (
    <Container>
      <Button onClick={() => back()}>
        Voltar
      </Button>
        <Form onSubmit={handleSubmit(registerUser)}>
          <div>
            <h3>Cadastro</h3>
              <div className="divRow">
                <label htmlFor="user">
                  <p>Seus dados</p>
                    <Input
                        type="text"
                        id="user_name"
                        placeholder="Nome completo"
                        {...register("user_name")}
                        error={errors?.user_name}
                    />
                    <Input
                        type="text"
                        id="user_image"
                        placeholder="Nome completo"
                        {...register("user_image")}
                        error={errors?.user_image}
                    />
                    <Input
                        type="text"
                        id="email"
                        {...register("email")}
                        placeholder="E-mail"
                        error={errors?.email}
                    />
                    <Input
                        type="password"
                        id="password"
                        {...register("password")}
                        placeholder="Senha"
                        error={errors?.password}
                    />
                    
                </label>


                <label htmlFor="address">
                  <p>Seu endereço</p>
                    <Input
                        type="text"
                        id="cep"
                        {...register("cep")}
                        placeholder="CEP"
                        error={errors?.cep}
                    />
                    <Input
                        type="text"
                        id="city"
                        {...register("city")}
                        placeholder="Cidade"
                        error={errors?.city}
                    />
                    <Input
                        type="text"
                        id="state"
                        {...register("state")}
                        placeholder="Estado"
                        error={errors?.state}
                    />
                    <Input
                        type="text"
                        id="district"
                        {...register("district")}
                        placeholder="Rua"
                        error={errors?.district}
                    />
                    <Input
                        type="text"
                        id="number"
                        {...register("number")}
                        placeholder="Número"
                        error={errors?.number}
                    />
                </label>


                <label htmlFor="contact">
                  <p>Seu contato</p>
                    <Input
                        type="text"
                        id="phone"
                        {...register("phone")}
                        placeholder="Telefone"
                        error={errors?.phone}
                    />
                    <Input
                        type="text"
                        id="secondary_email"
                        {...register("secondary_email")}
                        placeholder="E-mail secundário"
                        error={errors?.secondary_email}
                    />
                    <Input
                        type="text"
                        id="whatsapp"
                        {...register("whatsapp")}
                        placeholder="WhatsApp"
                        error={errors?.whatsapp}
                    />
                    <Input
                        type="text"
                        id="description"
                        {...register("description")}
                        placeholder="Descrição"
                        error={errors?.description}
                    />
                </label>

              </div>
                <Button  ton type="submit">Cadastrar</Button>
            </div>
        </Form>

    </Container>
  );
};

export default Register;
