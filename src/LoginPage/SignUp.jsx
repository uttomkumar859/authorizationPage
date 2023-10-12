import { useState } from "react"
import {  Link, useNavigate } from "react-router-dom"


const Signup = () => {
    const navigate = useNavigate();
    const [userData ,setUserData] = useState({username :'' ,password: ''})
    const submithandler = () =>{
        let userList = localStorage.getItem("userList");
        userList = userList?JSON.parse(userList) :  null ;
        let checkUser = userList.some(({username}) =>(username===userData.username));
        if(checkUser) alert('username is already in userlist')
        if(checkUser){
            localStorage.setItem('userList', JSON.stringify([...userList, userData]))
            localStorage.setItem('user',JSON.stringify(userData))
            navigate('/')
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
            <input type="submit" name="Sign Up"/>

            <Link to='/auth/login'>Go to Login</Link>
        </form>
    </>
  )
}

export default Signup;