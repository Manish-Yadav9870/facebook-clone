
import './App.scss';
import NavBar  from './components/layOut/navbar/navbar';
import SideBar from './components/layOut/sidebar/sidebar';
import MainContant from './components/layOut/main/main';



function App() {
  return (
    <>
    <div className="main_container">
    <NavBar/>
    <SideBar/>
    <MainContant/>
    
    </div>
    </>
  );
}

export default App;
