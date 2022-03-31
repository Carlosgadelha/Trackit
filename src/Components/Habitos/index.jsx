import axios from "axios";
import {useState, useEffect} from 'react';
import styled from "styled-components"

import Header from "../Header";
import Menu from "../Menu";


export default function Habitos({token}){
    const [habitos, setHabitos] = useState([]);

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
            setHabitos(response.data)
            console.log(response.data)
        })
        .catch(error => { console.log(error) })
    },[]) 

    if(habitos.length === 0){
        
        return(
            <Container>
                <Header />
                <Menu token={token} />
                <Mensagem>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </Mensagem>
                
            </Container>
        )
    }

    return(
        <>  
            <Header />
            <Menu token={token} />
    
        </>
    )
}



const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #E5E5E5;
    width: 100%;
    height: 100vh;
    /* align-items: center; */
    /* justify-content: center; */
    /* margin-top: 70px; */


`
const Mensagem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        font-family: 'Lexend Deca';
        width: 340px;
        font-style: normal;
        margin-top: 28px;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }
    

`