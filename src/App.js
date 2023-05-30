import './style.css'
import Nav from './component/nav/Nav'
import Header from './header/Header';
import Content from './content/Content';
import axios from 'axios';
axios.defaults.baseURL = 'http:/api.themoviedb.org/3';
axios.defaults.params = {
  api_key : '1650be052ad504dcacebe6d51574ee3c',
  };


const App= () =>{

  return( <div>
    <Nav/>
    <Header/>
    <Content/>
  </div>);
};


export default App;