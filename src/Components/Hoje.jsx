import styled from "styled-components"
import axios from "axios";
import {useState, useEffect} from 'react';
import { useAuth } from "../providers/auth";
import Header from "./Header";
import Footer from "./Footer";
import { IoCheckbox } from "react-icons/io5";
const dayjs = require('dayjs');

export default function Hoje(){

    const {token} = useAuth();
    const [habitos, setHabitos] = useState([]);
    
    
    function dataAtual(){
        
        const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

        const dia = (dayjs().date() < 10) ? `0${dayjs().date()}` : dayjs().date();
        const diaSemana = dias[dayjs().day()];
        const mes = (dayjs().month() + 1 < 10) ? `0${dayjs().month() + 1}` : dayjs().month() + 1;

        return `${diaSemana}, ${dia}/${mes}`
    }

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
            setHabitos([...response.data])
            
        })
        .catch(error => { console.log(error.response.data) })
    },[]) 

    console.log(habitos)

    return(
        <Container>
            <Header />
            <Titulo>
                <div className="infos">
                    <h2>{dataAtual()}</h2>
                    <p>Nenhum hábito concluído ainda</p>
                </div>
            </Titulo>
            {habitos.map( habito => 
                
                <Habito> 
                    <h2>{habito.name}</h2>
                    <p>Sequência atual: {habito.currentSequence} dias</p>
                    <p>Seu recorde: {habito.highestSequence} dias</p>
                    <IoCheckbox  className="icon" />

                </Habito>
                
                )}
            
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #E5E5E5;
    align-items: center;
    width: 100%;
    height: 100vh;

`

const Titulo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 28px;
    margin-top: 98px;

    .infos{
        *{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
        }
        width: 340px;

        h2{
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
        }

        p{
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;

            color: #BABABA;
        }
    }
`

const Habito = styled.div`
    width: 340px;
    height: 94px;
    margin-left: 0px;
    margin-bottom: 10px;
    position: relative;
    background: #FFFFFF;
    border-radius: 5px;

    h2{
        margin-left: 15px;
        margin-top: 13px;
        margin-bottom: 7px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        margin-left: 15px;

        color: #666666;
    }

    .icon{
        font-size: 80px;
        position: absolute;
        top: 5px;
        right: 5px;
        color: #8FC549;
        
        /* border: 1px solid #E7E7E7; */

        border-radius: 5px;
    }



`



    