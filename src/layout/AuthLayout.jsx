import { useEffect } from "react";
import getUser from './../helper/hooks/getUser';
import { Outlet, useNavigate } from "react-router-dom"


const AuthLayout = () => {
  const user = getUser();
  const navigate = useNavigate();
  useEffect (() =>{
    if(user?.username)navigate('/')
  },[user])
  return (
    <div>
        AuthLayout
        <Outlet />
    </div>
  )
}

export default AuthLayout;
