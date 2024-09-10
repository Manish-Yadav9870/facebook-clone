import SideBarFirstCont from './sidebar-options/sidebar-option';
import SideBarShortCutData from './sidebar-shortcut/sidebar-shortcut';
import './sidebar.scss'

const SideBar=()=>{
    return (
        <aside className="aside">
   <div className="SideBar_First_Container"><SideBarFirstCont/></div>
   <div className="SideBar_Second_Container"><SideBarShortCutData/></div>
        </aside>
    )
}
export default SideBar;