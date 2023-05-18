import React, { useState } from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateEmployer() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  function createEmployee(e) {
    e.preventDefault();

    try {
      axios
        .post('http://localhost:8080/api/v1/employees', {
          name,
          lastName,
          email,
        })
        .then(() => {
          toast.success('Employee Created Successfully', {
             // Adicione o ícone desejado aqui
          });
          navigate('/');
        })
        .catch(err => console.log(err));
    } catch (error) {}
  }

  return (
    <>
     
      <div>
        <form>
          <h2>Add Employee</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
              id="name"
            />
            <label htmlFor="lastName">Lastname:</label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              id="lastName"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              id="email"
            />
            <button onClick={createEmployee} className="btn">
              Create Employee
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateEmployer;
