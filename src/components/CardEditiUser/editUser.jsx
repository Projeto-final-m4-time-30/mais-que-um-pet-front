import { Api } from "../../services";
import { useContext, useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userContext } from "../../context/userContext";
import {Input} from "../Input"

 function EditUser(){
   const {editUser} = useContext(userContext)
    const [mostrarForm,setMostrarForm] = useState(false)
     
    
    const formSchemma = yup.object().shape({
        name: yup.string(),
        email: yup.string(),
        user_image: yup.string(),
        password: yup.string()
     
       });
     
       const {register, handleSubmit,formState:{errors}} = useForm({
        resolver: yupResolver(formSchemma)
       });
     


    return (
        <form onSubmit={handleSubmit(editUser)}>
        <header>
          <h1>Atualizar usuario</h1>
          <button onClick={()=>setMostrarForm(false)}>X</button>
        </header>
  
        <div>
          <label>nome</label>
          <Input {...register("name")}></Input>
        {errors.name && errors.name.message}
        </div>
  
       
  
        <div>
          <label>email</label>
          <Input {...register("email")}></Input>
        </div>

        <div>
          <label>user_image</label>
          <Input {...register("user_image")}></Input>
        </div>
        
  
      <button   type="submit">Atualizar</button>
        
  
        
      </form>
    )

    
 }