
import './App.scss';
import NavBar  from './components/layOut/navbar/navbar';
import SideBar from './components/layOut/sidebar/sidebar';
import MainContant from './components/layOut/main/main';
import FooterContant from './components/layOut/footer/footer';


function App() {
  return (
    <>
    <div className="main_container">
    <NavBar/>
    <SideBar/>
    <MainContant/>
    <FooterContant/>
    </div>
    </>
  );
}

export default App;
