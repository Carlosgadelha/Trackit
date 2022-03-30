import {Link} from "react-router-dom"
import {useState} from "react";
import axios  from "axios";
import styled from "styled-components"
import Logo from "../Logo";

export default function Cadastro({salvarToken}){

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");

    function cadastrar(){
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email,
            name,
            image,
            password
        })
        .then(response => {
            console.log(response.data)
            salvarToken(response.data.token)
        })
        .catch(error => { console.log(error) })
    }

    console.log(name, email, password)

    return(
        <Container>
            <Logo />
            <input placeholder="email" onChange={e => setEmail(e.target.value)}></input>
            <input placeholder="senha" onChange={e => setPassword(e.target.value)}></input>
            <input placeholder="nome" onChange={e => setName(e.target.value)}></input>
            <input placeholder="foto" onChange={e => setImage(e.target.value)}></input>
            <button onClick = {() => cadastrar()}>Cadastrar</button>
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

    input::placeholder{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }

    button{
        width: 303px;
        height: 45px;

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