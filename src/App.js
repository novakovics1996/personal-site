import './App.css';
import FirstComponent from './components/FirstComponent/FirstComponent';
import SecondComponent from './components/SecondComponent/SecondComponent';
import ThirdComponent from './components/ThirdComponent/ThirdComponent';
import FourthComponent from './components/FourthComponent/FourthComponent';
import FifthComponent from './components/FifthComponent/FifthComponent';
import SixthComponent from './components/SixthComponent/SixthComponent';
import SeventhComponent from './components/SeventhComponent/SeventhComponent';
import EightComponent from './components/EightComponent/EightComponent';
import NinthComponent from './components/NinthComponent/NinthComponent';
import TenthComponent from './components/TenthComponent/TenthComponent';

function App() {
return (
    <div className="App">
        <TenthComponent />
        <NinthComponent />
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        <FifthComponent />
        <SixthComponent />
        <SeventhComponent />
        <EightComponent title={titile} number={numeroUno} />
    </div>
  );
}

export default App;
