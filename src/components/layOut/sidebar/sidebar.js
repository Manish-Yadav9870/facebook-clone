import SideBarFirstCont from './sidebar-options/sidebar-option';
import './sidebar.scss'

const SideBar=()=>{
    return (
        <aside className="aside">
   <div className="SideBar_First_Container"><SideBarFirstCont/></div>
   <div className="SideBar_Second_Container">SideBar_Second_Container</div>
        </aside>
    )
}
export default SideBar;