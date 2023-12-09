import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import {Routes , Route} from 'react-router-dom'
import YourProfile from './Pages/YourProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<LandingPage/>} />
        <Route path='/yourprofile'element={<YourProfile/>}/>
      </Routes>
     
     
    </div>
  );
}

export default App;
