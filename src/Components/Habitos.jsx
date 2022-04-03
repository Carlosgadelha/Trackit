import axios from "axios";
import {useState, useEffect} from 'react';
import styled from "styled-components"
import Habito from "./Habito";
import { useAuth } from "../providers/auth";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";


export default function Habitos(){
    
    const {token, setConcluidos} = useAuth();
    const [habitos, setHabitos] = useState([]);

    function getConcluidos(){
            
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {

            setConcluidos((response.data.filter(habito => habito.done).length/response.data.length * 100).toFixed(0))

        })
        .catch(error => { console.log(error.response) })

}
    
    const handleHabbits = () => {

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
            setHabitos([...response.data])
            getConcluidos()
        })
        .catch(error => { console.log(error.response.data) })

    }

    useEffect(() => {
        handleHabbits()
    },[]) 


    if(habitos.length === 0){
        
        return(
            <Container>
                <Header />
                <Menu atualizar = {handleHabbits}/>
                <Mensagem>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </Mensagem>
                
            </Container>
        )
    }else{

    
        return(
            <Container>  
                <Header />
                <Menu atualizar = {handleHabbits}/>
                <div className="habitos">
                    {habitos.map(habito => <Habito  nome ={habito.name} dias ={habito.days} key={habito.id} id={habito.id} atualizar = {handleHabbits}/>)}
                </div>
                <Footer />
            </Container>
        )
   }
}





const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #E5E5E5;
    width: 100%;
    height: 100vh;
    /* align-items: enter; */
    /* justify-content: center; */
    /* margin-top: 70px; */

    .habitos{
        display: flex;
        background: #E5E5E5;;
        flex-direction: column;
        padding-bottom: 70px;
    
    }


`
const Mensagem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        font-family: 'Lexend Deca';
        width: 340px;
        font-style: normal;
        margin-top: 8px;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }
    

`