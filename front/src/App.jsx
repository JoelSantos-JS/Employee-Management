import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ListEmployer from './components/ListEmployer/ListEmployer'
import { Routes , Route} from 'react-router-dom'
import CreateEmployer from './components/CreateEmployer/CreateEmployer'
import UpdateEmployer from './components/UpdateEmployer/UpdateEmployer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <div className='container'>


 
<Header/>

  <Routes>
      <Route path="/" element={<ListEmployer />} />
      <Route path="/employees" element={<ListEmployer />} />
      <Route path="/createemployees" element={<CreateEmployer />} />
      <Route path="/updateemployees/:id" element={<UpdateEmployer />} />
    </Routes>
    <ToastContainer />
    <Footer/>


      </ div>
  )
}

export default App
