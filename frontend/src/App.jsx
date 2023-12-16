import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import AddEbook from './components/AddEbook';

import { AppProvider } from './AppContext';
import BrowseEbook from './components/BrowseEbook';
import ViewEbook from './components/ViewEbook';




function App() {
  return (
    <div>
  
      
     
      <BrowserRouter>
      <AppProvider>
      <Navbar/>
        
        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='Signup' element={<Signup />}/>
          <Route path='Login' element={<Login />}/>
          <Route path='AddEbook' element={<AddEbook />}/>
          <Route path='BrowseEbook' element={<BrowseEbook />}/>
          <Route path='view/:id' element={<ViewEbook />}/>


        </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
