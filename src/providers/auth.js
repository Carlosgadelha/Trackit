import react from "react"

export const  AuthContext = react.createContext({})

export const AuthProvider  = (props) => { 

    const [token, setToken] = react.useState("")
    const [concluidos, setConcluidos] = react.useState('0')
    const [urlImagem, setUrlImagem] = react.useState('')

    react.useEffect(() => {

        const useStorage = localStorage.getItem('token')
        
        if (useStorage) {
            setToken(useStorage)
        }else{
            setToken('')
        }
    },[])
    console.log(`Authorization: Bearer ${token}`)

    return (
        <AuthContext.Provider value = {{token, setToken, concluidos, setConcluidos, urlImagem, setUrlImagem}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => react.useContext(AuthContext) 