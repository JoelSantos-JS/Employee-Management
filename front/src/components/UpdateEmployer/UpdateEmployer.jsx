import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
function UpdateEmployer() {
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
    const [id, setId] = useState(searchParams.get('id'));
    const [name, setName] = useState(searchParams.get('name'));
    const [lastName, setLastName] = useState(searchParams.get('lastName'));
    const [email, setEmail] = useState(searchParams.get('email'));



    function updateEmployee(e){
        e.preventDefault();


        try {
          axios.put(`http://localhost:8080/api/v1/employees/${id}`, {
            name,
            lastName,
            email
              
            
            
            }) .then(() => {
              toast.success('Employee Updated Successfully', {
                 // Adicione o ícone desejado aqui
              });
              navigate('/employees');
            })
            .catch(err => console.log(err));
        } catch (error) {
          console.log(error);
        }
      
    
    }

        
    


  return (
    <>

        <div>


        <form action="">

          <h2>Update Employee</h2>

        <div className='form-group'>
        <label htmlFor="name">Name:</label>
        <input type="text" className='form-control' value={name} onChange={e => setName(e.target.value)} id="name" />
        <label htmlFor="lastName">Lastname:</label>
        <input type="text" className='form-control' value={lastName} onChange={e => setLastName(e.target.value)} id="lastName" />
        <label htmlFor="email">Email:</label>
        <input type="email" className='form-control' value={email} onChange={e => setEmail(e.target.value)} id="email" />

        <button onClick={updateEmployee} className='btn '>Update Employee</button>
        </div>


        </form>

        </div>
    </>

  )
}

export default UpdateEmployer