import styled from "styled-components"
import { useState } from "react"

export default function Menu(){

    const [ativar, setAtivar] = useState(false)

    if(ativar){

        return(
            <Container>
                <Titulo>
                    <h1>Meus hábitos</h1>
                    <button onClick={()=> setAtivar(!ativar)}>+</button>
                </Titulo>
                <CriarHabitos>
                    <input placeholder="nome do hábito"></input>
                    <Dias>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </Dias>
                    <Opcoes>
                        <div className="cancelar">Cancelar</div>
                        <button>Salvar</button>
                    </Opcoes>
                    
                </CriarHabitos>
            </Container>
        )

    }
    return(
        <Container>
            <Titulo>
                <h1>Meus hábitos</h1>
                <button onClick={()=> setAtivar(!ativar)}>+</button>
            </Titulo>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-top: 98px;

    /* margin-top: 28px; */
`
const Titulo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 340px;
    height: 29px;


    *{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
    }

    h1{
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;

        
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border: none;
        border-radius: 4.63636px;
        
        
        font-size: 26.976px;
        line-height: 34px;
        
        color: #FFFFFF;
    }

`  

const CriarHabitos = styled.div`
    
    width: 340px;
    height: 180px;
    margin-top: 20px;
    margin-left: 0px;
    background: #FFFFFF;
    border-radius: 5px;


    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        margin-left: 19px;
        margin-top: 18px;

    }

    input::placeholder{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #DBDBDB;
    }

`

const Dias = styled.div`
    margin-left: 19px;

    button{
        width: 30px;
        height: 30px;
        margin-right: 4px;
        margin-top: 8px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;

        color: #DBDBDB;
    }

`

const Opcoes = styled.div`

       
    display: flex;
    margin-top: 29px;
    height: 35px;
    align-items: center;
    justify-content: flex-end;
   
   .cancelar{
       display: flex;
       margin-right: 23px;
       align-items: center;
       text-align: center;

       font-family: 'Lexend Deca';
       font-style: normal;
       font-weight: 400;
       font-size: 15.976px;
       line-height: 20px;
       color: #52B6FF;

   }

   button{
       
       width: 84px;
       height: 35px;
       margin-right: 16px;
       background: #52B6FF;
       border: none;
       border-radius: 4.63636px;

       font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;

        text-align: center;

        color: #FFFFFF;

   }

`