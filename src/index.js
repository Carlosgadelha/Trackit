import ReactDom from 'react-dom'
import App from './Components/App'
import {AuthProvider} from "./providers/auth"

ReactDom.render( 

    <AuthProvider> 
        <App /> 
    </AuthProvider>, 
    document.querySelector('.root')
)