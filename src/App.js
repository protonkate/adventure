import './App.css';
import Header from './Header';
import Home from './containers/pages/Home';
import Services from './containers/pages/Services';
import Products from './containers/pages/Products';
import SignUp from './containers/pages/SignUp';

import { Routes, Route} from 'react-router-dom';

function App() {
  return (
   <div id='main'>      
      <Header/>      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>     
   </div>
  );
}

export default App;
