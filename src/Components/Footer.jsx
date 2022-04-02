import styled from "styled-components"
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer(){
    return(
        <Container>
            <Menus>
                <Link to="/habitos" style={{textDecoration: 'none'}}>
                    <p>Hábitos</p>
                </Link>
                <Link to="/hoje">
                <div className='barraCircular'>
                <CircularProgressbar  
                        value={100}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                        })}
                    />
                </div>
                </Link>
                <Link to="/historico" style={{textDecoration: 'none'}}>
                    <p>Histórico</p>
                </Link>
            </Menus>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    background: #FFFFFF;
    width: 100%;
    height: 70px;
    position: fixed;
    left: 0px;
    bottom: 0px;
` 

const Menus = styled.div`
    
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    height: 70px;
    width: 308px;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;

        color: #52B6FF;
    }

    .barraCircular{
        display: flex;
        position: absolute;
        left:106px;
        bottom: 10px;
        /* justify-content: center;
        align-items: center; */
        width: 91px;
        height: 91px;
    }

    .nome{
        color: black
    }

`