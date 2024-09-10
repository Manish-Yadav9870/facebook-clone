import './sidebar-shortcut.scss'
import { SlOptions } from "react-icons/sl";

const SideBarShortCut={
    Data:[
        
        {
            id:"2",
            label:"NATIONAL POLICE GROUP-2018",
            Image: "https://scontent.fjai1-2.fna.fbcdn.net/v/t39.30808-6/264022094_10217127464059309_252054220620396544_n.jpg?stp=c0.223.640.640a_cp0_dst-jpg_s50x50&_nc_cat=104&ccb=1-7&_nc_sid=1760b9&_nc_ohc=MmTcgZ2jCw4Q7kNvgHEt6Tv&_nc_ht=scontent.fjai1-2.fna&oh=00_AYCnE7Xq12vQ706jTaaXHRnrJnzDqL51HCNAIve5Q8vINA&oe=66E4385F",
            name:"mmn"
        },
       
       
        
    ]
}
const SideBarShortCutData=()=>{
    return(
        <div className="SideBarShortCut">
            <div className="shortcut_name_">
                <div className="shortcut_child_cont">
                Your Shortcuts
                </div>
                <div className="name_cont"><SlOptions className='SlOptions' /></div>
            </div>
            <div className='main_combo'>
            {SideBarShortCut.Data.map(ele=>{
                return(
                    
                    <div key={ele.id} className='shortcut_common_cont'>
                        <div className="combo_cont">
                            
                        <div className="SideBarShortCutIcon"><img src={ele.Image} alt={ele.name}></img>
                        </div>
                        <div className="label_cont">{ele.label}</div>
                    </div>
                    </div>
                   
                )
            })}
             </div>
        </div>
       
    )
}
export default SideBarShortCutData;