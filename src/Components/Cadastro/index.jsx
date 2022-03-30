import styled from "styled-components"
import Logo from "../Logo";

export default function Cadastro(){
    return(
        <Container>
            <Logo />
            <input placeholder="email"></input>
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
    }
`   