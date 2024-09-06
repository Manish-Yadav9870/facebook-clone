import './navbar-icon.scss'
import { MdHomeFilled } from "react-icons/md";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { MdOutlineGroups3 } from "react-icons/md";
const NavBarIcon = () => {

    return (
        <div className="Nav_Icon_cont">
            <ul className='icon_ul'>
                <li className='icon_li'><MdHomeFilled /></li>
                <li className='icon_li'><FaFontAwesomeFlag /></li>
                <li className='icon_li'><MdOndemandVideo /></li>
                <li className='icon_li'><CiShop /></li>
                <li className='icon_li'><MdOutlineGroups3 /></li>
            </ul>
        </div>
    )

}
export default NavBarIcon;