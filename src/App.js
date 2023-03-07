import './App.css';
import AboutComponent from './components/AboutComponent/AboutComponent';
import IdoComponent from './components/IdoComponent/IdoComponent';
import ProjektComponent from './components/ProjektComponent/ProjektComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
import FirstComponent from './components/FirstComponent/FirstComponent';
import NavComponent from './components/NavComponent/NavComponent';

function App() {
return (
    <div className="App">
        <NavComponent />
        <FirstComponent />        
        <AboutComponent />
        <IdoComponent />
        <ProjektComponent />
        <ContactComponent />
    </div>
  );
}

export default App;
