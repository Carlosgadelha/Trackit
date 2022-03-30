import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from "react";

import "./reset.css"
import Login from "../Login"
import Cadastro from '../Cadastro';
import Habitos from '../Habitos';

export default function App(){

    const [token, setToken] = useState(null);
    console.log(token)
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login salvarToken={(token) => setToken(token)}/>}/>
                <Route path='/cadastro' element={<Cadastro />}/>
                <Route path='/habitos' element={<Habitos token={token} />}/>
            </Routes>
        </BrowserRouter>  
    )
}

