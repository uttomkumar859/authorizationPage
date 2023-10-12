import { useState } from "react"
import {  Link, useNavigate } from "react-router-dom"


const LoginPage = () => {
    const navigate = useNavigate();
    const [userData ,setUserData] = useState({username :'' ,password: ''})
    const submithandler = () =>{
        let userList = localStorage.getItem(userList)
        userList = userList?JSON.parse(userList) :  []
        let checkUser = userList.some(({username,password}) =>(username===userData.username && password===userData.password));
        if(checkUser){
            localStorage.setItem('user', JSON.stringify(userData))
            navigate('/')
        }
        else{
            alert('User is not registered.')
            navigate('/auth/signup')
        }
    }

  return (
    <>
        <form onSubmit={submithandler}>
            <input type="text" placeholder="Enter your username"
            onChange={(e) => setUserData(prev => {return{...prev , username: e.target.value}})}
            />
            <input type="password" placeholder="Enter your password" 
            onChange={(e) => setUserData(prev=>{return{...prev, password:e.target.value}})}
            />
            <input type="submit" name="Login"/>

            <Link to='/auth/signup'>Go to Sign up Page</Link>
        </form>
    </>
  )
}

export default LoginPage