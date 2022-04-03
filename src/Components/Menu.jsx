import styled from "styled-components"
import { ThreeDots } from  'react-loader-spinner'
import axios from "axios"
import { useState} from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../providers/auth";

export default function Menu(props){
    const {atualizar}  = props ;
    const [ativar, setAtivar] = useState(false)
    const [dias, setDias] = useState(new Map())
    const [habito, setHabito] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();
    const {token} = useAuth();

    function toggle(id,dia){
       const selecionado = dias.has(id);
       if(selecionado){
           dias.delete(id);
           setDias( new Map(dias));
       }else{
            setDias( new Map(dias.set(id, dia)));
       }
    }

    function criarHabito(){
        setLoading(true);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            
            name: habito,
            days: [ ...dias.keys()] 
        },{
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            setAtivar(!ativar);
            setDias( new Map());
            setHabito("");
            atualizar();
        
        }).catch(error => { 
            alert("Todo mundo erra '(-_-)'")
            setLoading(false);
            setDias( new Map());
            setHabito("");
        })

    }

    
    
    if(ativar){

        return(
            <Container>
                <Titulo>
                    <h1>Meus hábitos</h1>
                    <button onClick={()=> setAtivar(!ativar)}>+</button>
                </Titulo>
                <CriarHabitos status={loading}>
                    <input placeholder="nome do hábito" onChange={e => setHabito(e.target.value)} value={habito}></input>
                    <Dias>
                        <Button 
                            disabled ={loading}
                            selecionado = {dias.has(0)}
                            onClick={()=> toggle(0, 'D')}> D </Button>
                        <Button 
                            disabled ={loading}
                            selecionado = {dias.has(1)}
                            onClick={()=> toggle(1, 'S')}> S </Button>
                        <Button 
                            disabled ={loading}
                            selecionado = {dias.has(2)}
                            onClick={()=> toggle(2, 'T')}> T </Button>
                        <Button
                            disabled ={loading}
                            selecionado = {dias.has(3)} 
                            onClick={()=> toggle(3, 'Q')}> Q </Button>
                        <Button
                            disabled ={loading} 
                            selecionado = {dias.has(4)} 
                            onClick={()=> toggle(4, 'Q')}> Q </Button>
                        <Button
                            disabled ={loading}
                            selecionado = {dias.has(5)}  
                            onClick={()=> toggle(5, 'S')}> S </Button>
                        <Button
                            disabled ={loading} 
                            selecionado = {dias.has(6)} 
                            onClick={()=> toggle(6, 'S')}> S </Button>
                    </Dias>
                    <Opcoes>
                        <div className="cancelar" onClick={()=> setAtivar(!ativar)}>Cancelar</div>
                        <button onClick={()=> criarHabito() } disabled ={loading}>
                            {loading?<ThreeDots
                                        height="100"
                                        width="100"
                                        color='white'
                                        text= 'center'
                                        ariaLabel='loading'
                                     />:'Salvar'}</button>
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
    margin-bottom: 20px;
    margin-top: 98px;
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

        &:hover{
            cursor: pointer;
       }
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
        background: ${props => props.status? '#F2F2F2;':'#FFFFFF'};
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        margin-left: 19px;
        text-indent: 7px;
        margin-top: 18px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        /* identical to box height */


        color: #666666;

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
    display: flex;
`

const Button = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    margin-right: 4px;
    margin-top: 8px;
    background: ${props => props.selecionado ?'#CFCFCF':'#FFFFFF'};
    border: ${props => props.selecionado ?'1px solid #CFCFCF':'1px solid #D5D5D5'} ; 
    box-sizing: border-box;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: ${props => props.selecionado ?'#FFFFFF':'#DBDBDB'};
    
    &:hover{
            cursor: pointer;
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

       &:hover{
            cursor: pointer;
       }

   }

   button{
       
       width: 84px;
       height: 35px;
       display: flex;
       align-items: center;
       justify-content: center;
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

        &:hover{
            cursor: pointer;
       }

   }

`