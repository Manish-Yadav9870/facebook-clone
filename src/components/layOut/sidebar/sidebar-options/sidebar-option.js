import { MdGroups2 } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { TbClockShare } from "react-icons/tb";
import { CiSaveDown2 } from "react-icons/ci";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";
import { MdEventBusy } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import './sidebar-option.scss'
const sideBarOptions={
    Header:"option",
    Data:
[
    {
        id:"1",
        label:"Friends",
        icon:<FaUserFriends style={{color:"rgb(131,224,212)"}} className="FaUserFriends" />,
    },
   
    {
        id:"2",
        label:"Memories",
        icon:<TbClockShare style={{color:"rgb(28,123,221)"}} className="TbClockShare" />
    },
    {
        id:"3",
        label:"Saved",
        icon:<CiSaveDown2 style={{color:"white"}} className="CiSaveDown2" />
    },
    {
        id:"4",
        label:"Groups",
        name:"manish_yadav",
        icon:<MdGroups2 style={{color:"white"}} className="MdGroups2" />
    },
    {
        id:"5",
        label:"Video",
        icon:<MdOutlineOndemandVideo style={{color:"rgb(37,148,226)"}} className="MdOutlineOndemandVideo" />           
    },
    {
        id:"6",
        label:"Marketplace",
        name:"manish_yadav",
        icon:<BsShop style={{color:"rgb(23,109,213)"}} className="BsShop" />
    },
    {
        id:"7",
        label:"Feeds",
        name:"manish_yadav",
        icon:<VscFeedback style={{color:"rgb(131,224,212)"}} className="VscFeedback" />
    },
    {
        id:"8",
        label:"Events",
        name:"manish_yadav",
        icon:<MdEventBusy style={{color:"rgb(23,109,213)"}} className="MdEventBusy" />
    },
    {
        id:"9",
        label:"Ads Manager",
        name:"manish_yadav",
        icon:<GiNetworkBars style={{color:"rgb(7, 154, 252)"}} className="GiNetworkBars" />
    },
    {
        id:"10",
        label:"See more",
        name:"manish_yadav",
        icon:<FaChevronDown style={{border:"none"}}className="FaChevronDown"/>
    },
   
   
]
}
const SideBarFirstCont=()=>{
    return(
<div className="SideBar_Super_Cont">
    <div className="Main_Profile_Cont">
<div className="profile_Message_Icon_Cont_">
    
    <span className="profile_Image_Cont">
        <img src="https://scontent.fjai1-2.fna.fbcdn.net/v/t39.30808-1/450611951_2171870229856890_3184289842668234936_n.jpg?stp=dst-jpg_s480x480&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=xGHdB7jQtugQ7kNvgFGtq9c&_nc_ht=scontent.fjai1-2.fna&oh=00_AYA7wTZ_AfJpG3JB50GSpGOwrHst4NDX6HFivDZz3Tkvcg&oe=66DF4C99" alt="img"></img>
        </span>   
    </div>
    <div className="SideBar_Profile_Name_Cont">Manish Yadav</div>
    </div>
    {sideBarOptions.Data.map((ele)=>{
        return(
            <div key={ele.id} className="SideBar_Map_Cont">
<div className="SideBar_Icon_Cont">{ele.icon}</div>
<div className="SideBar_Label_Cont">{ele.label}</div>
            </div>
          
        )
        
    })}
</div>
    )
}
export default SideBarFirstCont;