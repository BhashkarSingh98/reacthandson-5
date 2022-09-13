import './App.css';
import Hoc from './HOC/Hoc';
import "./HOC/Hoc.css"
import Purecomp from './Purecomponent/Purecomp';
import "./Purecomponent/Pure.css"

function App() {
  return (
    <>
    <div className='box1'>
      

    <Hoc/>
    </div>
    <div className='box2'>
     
      

    <Purecomp/>
    </div>
    </>
  );
}

export default App;
