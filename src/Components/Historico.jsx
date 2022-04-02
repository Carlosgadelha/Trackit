import axios from "axios";
import {useState, useEffect} from 'react';
import styled from "styled-components"
import Habito from "./Habito";
import { useAuth } from "../providers/auth";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";


export default function Historico(){
    
    const {token, } = useAuth();
    const [habitos, setHabitos] = useState([]);

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
            setHabitos([...response.data])
            
        })
        .catch(error => { console.log(error.response.data) })
    },[]) 
        
        return(
            <Container>
                <Header />
                <Titulo>
                    <h1>Histórico</h1>
                </Titulo>
                <Mensagem>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </Mensagem>
                <Footer />
                
            </Container>
        )
    
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #E5E5E5;
    width: 100%;
    height: 100vh;


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

const Titulo = styled.div`
    display: flex;
    align-items: center;
    
    width: 340px;
    height: 29px;
    margin-top: 98px;

    h1{ 
        
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;

    }
` 