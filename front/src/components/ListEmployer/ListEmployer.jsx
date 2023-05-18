import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import {GrUpdate} from 'react-icons/gr'
import {MdAutoDelete} from 'react-icons/md'


function ListEmployer() {

    const navigate = useNavigate();


    const [errors, setErrors] = useState({});

    const [employers, setEmployers] = useState([]);


    const getEmployee = () => {
        axios.get('http://localhost:8080/api/v1/employees')
        .then(response => {
          console.log(response.data);
          setEmployers(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      

    }

    const teste = () => {
           
        setInterval(() => {
            toast.success("Delete with successfully", {
                position: "top-right",
                autoClose: 1180,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
        }, 4000);


    }

    const addEmployee = () => {
            navigate('/createemployees');
    }

    useEffect(() => {
           getEmployee()
    }, [])


    const deleteEmployee = (id) => {


        try {

            axios.delete(`http://localhost:8080/api/v1/employees/${id}`)
            .then(() => {

                toast.success("Delete with successfully", {
                    position: "top-right",
                    autoClose: 1180,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });


                  setInterval(() => {
                    window.location.reload()
                  },1500)
    
             
            }).catch(error => {
                console.error(error);
            } )


         
    
            
        } catch (error) {
            
        }
       

        }
    

  return (
        <>

  

<div className='p-5'>
    <h2 className="text-center title">Employees List</h2>
    <div className = "row">
       <button className='btn btn-primary col-md-2 offset-md-10'  onClick={() => addEmployee()} >Create Employee</button>
    </div>
    <br></br>
    <div className = "row">
           <table className = "table table-striped table-bordered">

               <thead>
                   <tr>
                       <th> Employee First Name</th>
                       <th> Employee Last Name</th>
                       <th> Employee Email Id</th>
                       <th> Actions</th>
                   </tr>
               </thead>
               <tbody>
                   {
                       employers.map(
                           employee => 
                           <tr key = {employee.id}>
                                <td> { employee.name} </td>   
                                <td> {employee.lastName}</td>
                                <td> {employee.email}</td>
                                <td className='d-flex justify-content-around'> 
                                    <button className='btn btn-primary'><Link to={{ pathname: `/updateemployees/${employee.id}`, search: `?name=${employee.name}&lastName=${employee.lastName}&email=${employee.email}&id=${employee.id}` }} style={{ textDecoration: `none` }}><GrUpdate size={25}/></Link></button>
                         
                                    <button className='btn btn-danger' ><MdAutoDelete size={25}  onClick={() => deleteEmployee(employee.id)} /></button>
                                </td>
                           </tr>
                       )
                   }
               </tbody>
           </table>

    </div>

</div>


        </>

   
  )
}

export default ListEmployer