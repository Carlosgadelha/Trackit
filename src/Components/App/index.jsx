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

