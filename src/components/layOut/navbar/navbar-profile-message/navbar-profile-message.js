import { CgMenuGridR } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import './navbar-profile-message.scss'
const NavBarProfileMessage=()=>{
    return(
        <div className="navBar_Profile_Message_Cont">
<div className="profile_Message_Icon_Cont_1"><span><CgMenuGridR/></span></div>
<div className="profile_Message_Icon_Cont_2"><span><FaFacebookMessenger /></span></div>
<div className="profile_Message_Icon_Cont_3"><span><IoIosNotifications /></span><span className="span_In_Span"></span></div>
<div className="profile_Message_Icon_Cont_4"><span className="profile_Image_Cont"><img src="https://scontent.fjai1-2.fna.fbcdn.net/v/t39.30808-1/450611951_2171870229856890_3184289842668234936_n.jpg?stp=dst-jpg_s480x480&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=xGHdB7jQtugQ7kNvgFGtq9c&_nc_ht=scontent.fjai1-2.fna&oh=00_AYA7wTZ_AfJpG3JB50GSpGOwrHst4NDX6HFivDZz3Tkvcg&oe=66DF4C99"></img></span></div>
        </div>
    )
}
export default NavBarProfileMessage;