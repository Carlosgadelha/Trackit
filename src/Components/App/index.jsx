import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from "../../providers/auth";
import axios from "axios"
import "./reset.css"
import Login from "../Login"
import Cadastro from '../Cadastro';
import Habitos from '../Habitos';
import Hoje from '../Hoje';
import Historico from '../Historico';


export default function App(){

    const {token, setConcluidos} = useAuth();

    function getConcluidos(){
            
            axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(response => {

                setConcluidos((response.data.filter(habito => habito.done).length/response.data.length * 100).toFixed(0))

            })
            .catch(error => { console.log(error.response) })

    }
   
    getConcluidos();

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/cadastro' element={<Cadastro />}/>
                <Route path='/habitos' element={<Habitos />}/>
                <Route path='/hoje' element={<Hoje />}/>
                <Route path='/historico' element={<Historico />}/>
            </Routes>
        </BrowserRouter>  
    )
}

