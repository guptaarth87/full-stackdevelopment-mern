import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Home from './Pages/Home';

//setup routing
import { Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
     {/* navbar */}
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
