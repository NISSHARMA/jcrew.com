import {createContext,useState} from "react"

export const AuthContext=createContext()

function AuthContextProvider({children}) {

    const[isAuth,setIsAuth]=useState(false)
    const[token,SetToken]=useState(null)

    function SetLoginToken(data){
        SetToken(data)
    }

    function SetAuthentication(){
        setIsAuth(true)
    }


    return(
        <AuthContext.Provider value={{isAuth,token,SetLoginToken,SetAuthentication}}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider;