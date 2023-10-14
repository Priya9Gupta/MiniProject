import React from 'react'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
// import useAppContext from '../AppContext';
import { motion } from 'framer-motion';

const Login = () => {

  //   const{setLoggedin}=useAppContext();
  const LoginForm = useFormik({
    initialValues: {
      Email: '',
      Password: '',
      
    },
    onSubmit: async (values) => {
      console.log(values);
      
      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            
          'Content-Type': 'application/json',

        }
      });

      console.log(res.status);

      if (res.status === 200) {

        Swal.fire({
          icon: 'success',
          title: 'login successfull'
        })
        // setLoggedin(true);

        const data = await res.json();

        sessionStorage.setItem('user', JSON.stringify(data));

      }
      else if (res.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Login failed',
          text: 'Invalid email or Password'
        })
      }
    }
  });


  return (

    <motion.div

      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1}}
      transition={{ duration: 0.3, type:'just',damping: 15, stiffness: 100 }}
      
      className=' justify-content-center align-items-center d-flex' 
      style={{backgroundImage:'url("https://allroundclub.com/blog/wp-content/uploads/2021/08/5-books-every-kid-from-age-5-8-should-read.png")',height:'650px',objectFit:'cover'}}>
      
      <div className='card m-4 p-4'>
        <h2 className='text-center mb-3'>Login Form</h2>
        <form onSubmit={LoginForm.handleSubmit}>
            
          <label htmlFor="">Email</label>
          <input className='form-control mb-4' type="text" id='email' />
          <label htmlFor="">Password</label>
          <input className='form-control mb-4' type="password" id='password' />
          <button className='btn btn-primary mb-4' >Login</button>
        </form>
      </div>
           

    </motion.div>
  )
}

export default Login;