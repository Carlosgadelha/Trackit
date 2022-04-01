import styled from "styled-components"

export default function Habito({nome,dias}){

    return(
        <Container>
            <Card>
                <h1>{nome}</h1>
                <Dias>
                    <Button selecionado = {dias.includes(0)}>D</Button>
                    <Button selecionado = {dias.includes(1)}>S</Button>
                    <Button selecionado = {dias.includes(2)}>T</Button>
                    <Button selecionado = {dias.includes(3)}>Q</Button>
                    <Button selecionado = {dias.includes(4)}>Q</Button>
                    <Button selecionado = {dias.includes(5)}>S</Button>
                    <Button selecionado = {dias.includes(6)}>S</Button>
                    
                </Dias>
            </Card>
        </Container>
    )


}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

`

const Card = styled.div`
    
    width: 340px;
    height: 91px;
    margin-left: 0px;
    background: #FFFFFF;
    border-radius: 5px;

    h1{
        margin-left: 15px;
        margin-top: 13px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

`
const Dias = styled.div`
    margin-left: 14px;
    display: flex;
`

const Button = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    margin-right: 4px;
    margin-top: 8px;
    background: ${props => props.selecionado ?'#CFCFCF':'#FFFFFF'};
    border: ${props => props.selecionado ?'1px solid #CFCFCF':'1px solid #D5D5D5'} ; 
    box-sizing: border-box;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: ${props => props.selecionado ?'#FFFFFF':'#DBDBDB'}; ;  ;

`
const Opcoes = styled.div`

       
    display: flex;
    margin-top: 29px;
    height: 35px;
    align-items: center;
    justify-content: flex-end;
   
   .cancelar{
       display: flex;
       margin-right: 23px;
       align-items: center;
       text-align: center;

       font-family: 'Lexend Deca';
       font-style: normal;
       font-weight: 400;
       font-size: 15.976px;
       line-height: 20px;
       color: #52B6FF;

   }

   button{
       
       width: 84px;
       height: 35px;
       margin-right: 16px;
       background: #52B6FF;
       border: none;
       border-radius: 4.63636px;

       font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;

        text-align: center;

        color: #FFFFFF;

   }

`