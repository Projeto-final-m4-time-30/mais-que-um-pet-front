import styled from "styled-components";



export const Lista = styled.ul`
display:flex;



`
export const CaixaCard = styled.ul`
display:flex;
flex-direction:column;
align-items:center;
margin-left :20px;


`
export const Cards = styled.li`
 border: 4px solid  #b0b3b6;
 border-radius :5px;
 width:120px;
 height:150px;
 transition: all 0.6s;

 :hover{
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    border: 2px solid rgb(207, 207, 207);
    cursor: pointer;
}

h2{
    font-size:16px;
    margin-left:18px;
}
`

export const DivBotao = styled.div`
 width:10%;
 position: absolute;
 margin-top:165px;
button{
   
   
    font-family: "inter";
    font-weight: 100;
    height: 35px;
    width:100%;
    background-color: #A958B8;
    border: none;
    border-radius: 5px;
    color: aliceblue;
    
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    transition: all 0.6s;
  
  

  
   :hover {
    box-shadow: inset 200px 0 0 0 #EB78FF;
    color: white;
    cursor:pointer;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
}
}

`