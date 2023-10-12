import {Link} from 'react-router-dom';

const NavList = () => {
  return (
    <>
      <div className="nav_item">
        <Link to={'/'}  className='nav_link'> Home</Link>
        <Link to={'/about'}  className='nav_link'> About </Link>
        <Link to={'/service'} className='nav_link'>Service</Link>
        <Link to={'/contact'} className='nav_link'>Contact</Link>
      </div>
    </>
  )
}

export default NavList

