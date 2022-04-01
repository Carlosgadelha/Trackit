import react from "react"

export const  AuthContext = react.createContext({})

export const AuthProvider  = (props) => { 

    const [token, setToken] = react.useState("")

    react.useEffect(() => {
        const useStorage = localStorage.getItem("token")
        if (useStorage) {
            setToken(useStorage)
        }else{
            setToken("")
        }
    },[])

    return (
        <AuthContext.Provider value = {{token, setToken}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => react.useContext(AuthContext) 