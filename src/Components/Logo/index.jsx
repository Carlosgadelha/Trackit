import styled from "styled-components"
import logo from './logo.png';

export default function Logo(){
    return(
        <Container>
            <img src ={logo} />
            <h1>TrackIt</h1>
        </Container>
    )
}

const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 35px;

    img{
        width: 154.94px;
        /* height: 62.78px; */
        margin-top: 68px;
    }

    h1{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 68.982px;
        line-height: 86px;
        text-align: center;
        color: #126BA5;
    }
`



