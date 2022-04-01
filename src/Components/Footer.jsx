import styled from "styled-components"

export default function Footer(){
    return(
        <Container>
           <p>Hábitos</p>
           <button>+</button>
           <p>Histórico</p>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
    width: 100%;
    height: 70px;
    position: fixed;
    left: 0px;
    bottom: 0px;
` 