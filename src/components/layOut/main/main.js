import Midsection from "./main-content-cont/main-contant";
import MainContain from "./main-folder-cont/main-folder-cont";
import MainContact from "./main-second-folder/main-second-folder";
import MainStory from "./main-story-component/main-story-cont";
import './main.scss'
const MainContant=()=>{
    return (
        <main className="main">
<div className="main_first_container">
<div><MainStory/></div>
<div><Midsection/></div>
<div><MainContain/></div>
</div>
<div className="main_second_container">
<MainContact/>

</div>
        </main>
    )
}
export default MainContant;