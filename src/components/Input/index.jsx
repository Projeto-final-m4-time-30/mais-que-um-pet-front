import { forwardRef } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { ContainerInput, Error } from "./styles";



const Input = forwardRef(({ id, label, type, error, ...register }) => (
    <>
      <label htmlFor={id}>{label}</label>
      <ContainerInput>
        <input id={id} type={type} {...register}/>
        {error?.message && (
          <Error>
            <BiErrorCircle />
            <span>{error.message}</span>
          </Error>
        )}
      </ContainerInput>
    </>
  )
);

export default Input;
