import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios"
import styled from "styled-components"
import Logo from "./Logo"
import { useAuth } from "../providers/auth";


import { ThreeDots } from  'react-loader-spinner'

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const {setToken, setUrlImagem} = useAuth();
    const navigate = useNavigate();

    function logar(){
        setLoading(true);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
            email,
            password
        })
        .then(response => {
            
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('imagem', response.data.image);
            setToken(response.data.token)
            setUrlImagem(response.data.image)
            navigate("/hoje")

        })
        .catch(() => {
            alert("Usuário ou senha inválidos" ) 
            setLoading(false)
            setEmail("")
            setPassword("")
        })
        }

    return(
        <Container status = {loading}>
            <Logo />
            <input placeholder="email" onChange={e => setEmail(e.target.value)} disabled ={loading} value={email}></input>
            <input placeholder="senha" onChange={e => setPassword(e.target.value)} disabled ={loading} value={password}></input>
            <button onClick={()=> logar()} disabled ={loading} >{loading?<ThreeDots
                height="100"
                width="100"
                color='white'
                text= 'center'
                ariaLabel='loading'
            />:'Entrar'} </button>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
        width: 303px;
        height: 45px;
        margin-bottom: 6px;

        background: ${props => props.status? '#F2F2F2;':'#FFFFFF'};
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        text-indent: 11px;
        line-height: 25px;
        color: #DBDBDB;

        &::placeholder{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            text-indent: 11px;
            line-height: 25px;
            color: #DBDBDB;
            
        }

    }

    button{
        width: 303px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #52B6FF;
        border: none;
        border-radius: 4.63636px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;

        color: #FFFFFF;

        &:hover{
            cursor: pointer;
        }
    }

    p{
        margin-top: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
    }
`