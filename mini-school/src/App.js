import './App.css';
import Fr from './Frentend.js'

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
<Router>
          <Routes> 
           <Route path='/' element={<Fr/>}/>
        </Routes>    
    </Router>
     
    </>
  );
}

export default App;
