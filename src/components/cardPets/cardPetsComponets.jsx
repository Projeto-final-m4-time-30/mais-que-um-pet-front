import { useState } from "react"
import {Cards} from "./styled"
import {DivBotao} from "./styled"
import {Lista} from "./styled"
import {CaixaCard} from "./styled"





function ListaPets (){
   
    const [itens,setItens] = useState([
        {
        name : "geraldinho", 
        img : "../teste/UNN_TESTE_PUG.jpg"
        },

        {
            name : "geraldinho", 
            img : "../teste/UNN_TESTE_PUG.jpg"
        },

        {
            name : "geraldinho", 
            img : "../teste/UNN_TESTE_PUG.jpg"
        }
    ])
    
   const CardsPets = itens.map(
      
      (p,i)=>
       
       <CaixaCard>
      <Cards key={i}>

      <figure>
      <img  src={p.img} alt="Foto do pet" />
      </figure>

      <div>
          <h2>{p.name}</h2>
      </div>
     
      </Cards>
      <DivBotao>
      <button>Me Adote</button>
      </DivBotao>
      </CaixaCard>
    
     )
  
      
    return (
        
            <Lista>
                {CardsPets}
            </Lista>
       
     
    )
    

    
  }

  export default ListaPets