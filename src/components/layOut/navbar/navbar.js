import NavBarIcon from './navbar-icon/navbar-icon';
import NavBarSearchLogo from './navbar-search-logo/navbar-search-logo';
import NavBarProfileMessage from './navbar-profile-message/navbar-profile-message';
import './navbar.scss'


const NavBar=()=>{
    return (
        <nav className="nav">
   <div className="Nav_Main_container">
    <div className='Nav_First_Cont'>
       <NavBarSearchLogo/>
    </div>
    <div className='Nav_Second_Cont'>
        <NavBarIcon/>
    </div>
    <div className="Nav_Third_Cont">
        <NavBarProfileMessage/>
    </div>
   </div>
        </nav>
    )
}
export default NavBar;