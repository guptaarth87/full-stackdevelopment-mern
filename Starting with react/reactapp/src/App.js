import './App.css';
import ComponentMount from './Pages/ComponentMount';

import LandingPage from './Pages/LandingPage';
import Propfile from './Pages/Propfile';
import Reacthook from './Pages/Reacthook';
import TernaryOperator from './Pages/TernaryOperator';
import UseEffectFetch from './Pages/UseEffectFetch';
import UseEffecthook from './Pages/UseEffecthook';

import {Routes , Route , Link , useNavigate} from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  const handlePropfileNav=()=>{
    
    console.log("button clicked")
      navigate('/propfile');
   
      
    
  }
  return (
 <>
     <div>
       <h1>Headers</h1>
      <a href='/reacthook'>react hook page</a>
      <br></br>
      <Link className="btn btn-primary" to='reacthook'>Go to react page</Link><br></br><br></br>
      <Link className="btn btn-primary" to='home'>Go to home</Link><br></br><br></br>
      <button className="btn btn-primary" onClick={handlePropfileNav}>Go to propfile</button>
       <hr></hr>
       <Routes>

        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<LandingPage/>} />
        <Route path='/propfile' element={<Propfile/>} />
        <Route path='/reacthook' element={<Reacthook/>}/>
        <Route path='/react' element={<Reacthook/>}/>
       </Routes>
       {/* <LandingPage/> */}
       {/* <Propfile/> */}

       {/* <Reacthook/> */}
       {/* <UseEffecthook/> */}
       {/* <TernaryOperator/> */}
       {/* <UseEffectFetch/> */}
       {/* <ComponentMount/> */}
     </div>
 </>

  );
}

export default App;
