import userEvent from '@testing-library/user-event';
import { BrowserRouter, Route } from 'react-router-dom';
import React ,{useState} from 'react';
import  './App.css';
import Footer from './component/Fotter';
import { Login } from './Login';
import { Register } from './Register';
import { Homepage } from './Homepage';
import { Routes } from 'react-router-dom/dist';
import { CreatePoll } from './CreatePoll';
import { Navbar } from './component/Navbar/Navbar';
import { VoteSite } from './VoteSite';
import { Presentation } from './Presentation';
import { PresentationAll } from './PresentationAll';
function App() {
  /*const[currentForm,setCurrentForm] = useState('login');
  <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch = {toggleForm}/> :<Register onFormSwitch = {toggleForm}/>
      }
    </div>
  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }*/
  return (
    <>
    
    <BrowserRouter>
      <div className='background'>
      <Navbar/>
        <div className='App'>
          <Routes >
            
            <Route path="/Homepage" element={<Homepage/>}></Route> 
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Register" element={<Register/>}></Route>
            <Route path="/CreatePoll" element={<CreatePoll/>}></Route>
            <Route path="/VoteSite/:ID_Poll" element={<VoteSite/>}></Route>
            <Route path="/PresentationAll" element={<PresentationAll/>}></Route>
            <Route path="/Presentation/:IdAnswer" element={<Presentation/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>

    </>
    
  );
}
  
export default App;
