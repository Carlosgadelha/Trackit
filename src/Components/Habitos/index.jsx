import axios from "axios";
import {useEffect} from 'react';


export default function Habitos({token}){


    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            headers: {

                "Authorization": `Bearer ${token}`
            }
        })
        .then(response => {
            console.log(response.data)
    
        })
        .catch(error => { console.log(error) })
    },[])


    return(
        <>
            <h1>Habitos</h1>
        </>
    )
}