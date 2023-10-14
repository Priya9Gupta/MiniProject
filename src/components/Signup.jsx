import React from 'react'
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'; 
import {motion} from 'framer-motion';

const Signup = () => {

  
  const navigate = useNavigate();
  
  
    // initialize formik
    const signupForm = useFormik({
      initialValues: {
        Name: '',
        Email: '',
        password: '',
        
  
      },
      onSubmit: async (values) => {
        console.table(values);
        
       const res = await fetch('http://localhost:5000/user/add',{
         method:'POST',
         body:JSON.stringify(values),
         headers : {
         
          'Content-Type' : 'application/json',
          
         }
        });
        console.log(res.status);
        if(res.status === 200){
          Swal.fire({
            icon :'success',
            title :'Signup Success',
            text :'Now Login to continue'
          })
          navigate('/Login');
        }
        else{
          Swal.fire({
            icon : 'error',
            title :'Something went wrong',
            text :'Please Try Again'
          })
        }
  
      },
  
    });
    
  return (
  <div style={{height:'1000px',width:'1300px'}}>
    <motion.div 

    initial={{opacity:0,scale:0.1,x:'50%',y:'50%'}}
        animate={{opacity:1,scale:1,x:0,y:0}}
        transition={{duration : 0.5, type:'just',damping:15, stiffness:100}}
      
    className=' justify-content-center align-items-center d-flex'
    style={{backgroundImage:'url("https://images.unsplash.com/photo-1568667256531-7d5ac92eaa7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeSUyMGJvb2tzfGVufDB8fDB8fHww&w=1000&q=80")',height:'650px',objectFit:'cover',}}>
      <motion.div className='card m-4 p-4 bg-secondary fw-bold'
      
      initial={{opacity:0,scale:0.1,x:'100%',y:'50%'}}
      animate={{opacity:1,scale:1,x:0,y:0}}
      transition={{duration:0.5, type:'just',damping:15, stiffness:100}}

      
      >
       <h2 className='text-center'>Signup Form</h2>
       <form onSubmit={signupForm.handleSubmit}>
        <label htmlFor="">Full name</label>
        <input className='form-control mb-4' type="text" id='Name' placeholder='Your name' onChange={signupForm.handleChange} value={signupForm.values.Name}/>
        <label htmlFor="">Email</label>
       <input className='form-control mb-4' type="email" id='Email' placeholder='Email' onChange={signupForm.handleChange} value={signupForm.values.Email}/>
        <label htmlFor="">Password</label>
       <input className='form-control mb-4' type="password" id='password' placeholder='Password' onChange={signupForm.handleChange} value={signupForm.values.password} />
        <button className='btn btn-primary'>Signup</button>
       </form>
      </motion.div>
     
     
    </motion.div>
    </div>
  )
}

export default Signup ;