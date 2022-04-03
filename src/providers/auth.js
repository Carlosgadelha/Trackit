import react from "react"


export const  AuthContext = react.createContext({})

export const AuthProvider  = (props) => { 

    const [token, setToken] = react.useState(localStorage.getItem('token')?localStorage.getItem('token'):null)
    const [concluidos, setConcluidos] = react.useState('0')
    const [urlImagem, setUrlImagem] = react.useState(localStorage.getItem('imagem')?localStorage.getItem('imagem'):null)

    return (
        <AuthContext.Provider value = {{token, setToken, concluidos, setConcluidos, urlImagem, setUrlImagem}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => react.useContext(AuthContext) 