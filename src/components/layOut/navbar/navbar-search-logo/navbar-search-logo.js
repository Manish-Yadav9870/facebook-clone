import { FaFacebook } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import './navbar-search-logo.scss'
const NavBarSearchLogo = () => {
    return (
        <div className="Nav_Search_Logo_cont">
            <div className="Nav_Facebook_Logo_Cont">
                <span className='Facebook_Logo_Span'><FaFacebook className='FaFacebook' /></span>
            </div>
            <div className='Search_container'>
                <div className='Search_container_child'>
                    <div className='IoIosSearch_cont'><IoIosSearch className='IoIosSearch' /></div>
                    <div className='Search_Here_cont'><input className='input' type='text' placeholder='Search facebook' /></div>
                </div>
            </div>
        </div>
    )
}
export default NavBarSearchLogo;