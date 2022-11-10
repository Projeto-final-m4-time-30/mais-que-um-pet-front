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
      <div className="divButtonTitle">
        <h3>Cadastro</h3>
        <Button onClick={() => back()}>Fazer Login</Button>
      </div>
      <Form onSubmit={handleSubmit(registerUser)}>
        <div>
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
                placeholder="Avatar"
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
                id="city"
                {...register("address.city")}
                placeholder="Cidade"
                error={errors?.city}
              />
              <Input
                type="text"
                id="state"
                {...register("address.state")}
                placeholder="Estado"
                error={errors?.state}
              />
              <Input
                type="text"
                id="cep"
                {...register("address.cep")}
                placeholder="CEP"
                error={errors?.cep}
              />
              <Input
                type="text"
                id="district"
                {...register("address.district")}
                placeholder="Rua"
                error={errors?.district}
              />
              <Input
                type="text"
                id="number"
                {...register("address.number")}
                placeholder="Número"
                error={errors?.number}
              />
            </label>

            <label htmlFor="contact">
              <p>Seu contato</p>
              <Input
                type="text"
                id="phone"
                {...register("contact.phone")}
                placeholder="Telefone"
                error={errors?.phone}
              />
              <Input
                type="text"
                id="secondary_email"
                {...register("contact.secondary_email")}
                placeholder="E-mail secundário"
                error={errors?.secondary_email}
              />
              <Input
                type="text"
                id="whatsapp"
                {...register("contact.whatsapp")}
                placeholder="WhatsApp"
                error={errors?.whatsapp}
              />
              <Input
                type="text"
                id="description"
                {...register("contact.description")}
                placeholder="Descrição"
                error={errors?.description}
              />
            </label>
          </div>
          <div className="divButtonSubmit">
            <Button type="submit">Cadastrar</Button>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
