import { useEffect } from 'react';
import NavList from '../page/NavList'
import getUser from '../helper/hooks/getUser';
import {Outlet, useNavigate} from 'react-router-dom'

const AppLayout = () => {
  const user = getUser()
  const navigate = useNavigate()

  useEffect(()=>{
    if(!!user && !user?.username)navigate('/auth/login')
  },[user])
  return (
    <>
      <div>
        
        <NavList /><Outlet />
      
      </div>
    </>
  )
}

export default AppLayout;
