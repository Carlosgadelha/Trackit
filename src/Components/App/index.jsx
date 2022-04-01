import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from "react";

import "./reset.css"
import Login from "../Login"
import Cadastro from '../Cadastro';
import Habitos from '../Habitos';

export default function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/cadastro' element={<Cadastro />}/>
                <Route path='/habitos' element={<Habitos />}/>
            </Routes>
        </BrowserRouter>  
    )
}

