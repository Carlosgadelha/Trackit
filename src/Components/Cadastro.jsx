import {Link} from "react-router-dom"
import {useState} from "react";
import axios  from "axios";
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from  'react-loader-spinner'
import Logo from "./Logo";

export default function Cadastro(){

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    function cadastrar(){
        setLoading(true);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email,
            name,
            image,
            password
        })
        .then(response => {
            navigate("/")
        })
        .catch(() => {
            alert("Todo mundo erra '(-_-)'")
            setLoading(false)
            setEmail("");
            setName("");
            setImage("");
            setPassword("");
    })}

    return(
        <Container status={loading}>
            <Logo />
            <input placeholder="email" onChange={e => setEmail(e.target.value)} disabled ={loading} value={email} ></input>
            <input placeholder="senha" onChange={e => setPassword(e.target.value)} disabled ={loading} value={password} ></input>
            <input placeholder="nome" onChange={e => setName(e.target.value)} disabled ={loading} value={name} ></input>
            <input placeholder="foto" onChange={e => setImage(e.target.value)} disabled ={loading} value={image} ></input>
            <button onClick = {() => cadastrar()} disabled ={loading}>
                    {loading?<ThreeDots
                        height="100"
                        width="100"
                        color='white'
                        text= 'center'
                        ariaLabel='loading'
                    />:'Cadastrar'}</button>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
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
        text-indent: 11px;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }

    input::placeholder{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        text-indent: 11px;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
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