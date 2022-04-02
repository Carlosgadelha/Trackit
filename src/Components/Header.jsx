
import styled from "styled-components"

export default function Header(props){

    const {imagem} = props;
    
    return(
        <Container>
            <h1>TrackIt</h1>
            <img src="https://th.bing.com/th/id/OIP.MVQfUuotOcXdSfpyP2JWzwHaHa?pid=ImgDet&rs=1" alt="Foto Perfil"/>
        </Container>
    )
}

const Container = styled.div`

    display: flex;
    z-index: 1;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    position: fixed;
    left: 0px;
    top: 0px;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    h1{
        margin-left: 18px;
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }

    img{
        width: 51px;
        height: 51px;
        margin-right: 18px;
        border-radius: 98.5px;
    }
`