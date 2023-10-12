// eslint-disable-next-line valid-typeof
import { useEffect, useState } from "react"

const getUser = () => {
    const [user ,setUser] = useState(null);
    const getUserData = () =>{
        let data = null
        if (typeof window !== "undefined"){
            data = localStorage.getItem("user")
            data = data?JSON.parse(data) : {username : null , password: null}
        }
        return data;

    } 
    // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
    useEffect(() => {setUser(getUserData())},[])
    
  return user
}

export default getUser