import Joinus from './components/JoinUs';
import Settings from './components/Settings';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import Search from './components/Search';
import Help from './components/Help';
import Home from './components/Home';
import Download from './components/Download';
import './components/file.css';

function App() {
  return (
    <div>
      <div className="align-row">
        <Joinus/>
        <Settings/>
      </div>  
      <div className="align-row">
        <Login/>
        <ContactUs/>
      </div>  
       <div className="align-row">
        <Search/>
        <Help/>
      </div>  
        <div className="align-row">
        <Home/>
        <Download/>
      </div>  
    </div>
  );
}



export default App;
