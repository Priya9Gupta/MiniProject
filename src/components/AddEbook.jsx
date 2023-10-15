import React, { useState } from 'react'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

const AddEbook = () => {

  const [selFile, setSelFile] = useState('');
  const [selImg, setSelImg] = useState('');

  const add = useFormik({
    initialValues: {
      Title: '',
      Description: '',
      Price: '',
      Category: '',
      Year: ''
    },
    // asyns use with the using await 

    onSubmit: async (values) => {
      values.Image = selImg;
      values.File = selFile;
      console.log(values);

      const res = await fetch('http://localhost:5000/ebook/add', {
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
          title: 'Add successfully',
          text: 'Added'
        })
        // setLoggedin(true);

      }
      else if
        (res.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Not added',
          text: 'Invalid'
        })
      }
    }
  });

  const uploadFile = async (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    setSelFile(file.name);

    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: fd
    })
    console.log(res.status);
  }
  const uploadImage = async (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    setSelImg(file.name);

    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: fd
    })
    console.log(res.status);
  }


  return (
    <div style={{ backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg")' }}>
      <div className="container">

        <div className=' justify-content-center d-flex align-item-center' >

          <div className='card m-4 p-4 text-center bg-secondary w-100'>
            <h2 className='text-white my-4'>Add Ebook here</h2>
            <form onSubmit={add.handleSubmit} >
              <div className="row">
                <div className="col-md-6">
                  <input className='form-control' type="text" placeholder='Title' id="Title" onChange={add.handleChange} value={add.values.Title} /><br />
                </div>
                <div className="col-md-6">
                <input className='form-control' type="text" placeholder='Author' id="Author" onChange={add.handleChange} value={add.values.Author} /><br />

                </div>
              </div>
              {/* <input className='form-control' type="text" placeholder='Author' id="Author" onChange={add.handleChange} value={add.values.Author} /><br /> */}
              <input className='form-control' type="number" placeholder='Year' id="Year" onChange={add.handleChange} value={add.values.Year} /><br />
              <input className='form-control' type="text" placeholder='Type' id="Type" onChange={add.handleChange} value={add.values.Type} /><br />
              <input className='form-control' type="text" placeholder='Category' id="Category" onChange={add.handleChange} value={add.values.Category} /><br />
              <input className='form-control' type="text" placeholder='Description' id="Description" onChange={add.handleChange} value={add.values.Description} /><br />

              <label>Upload Image</label>
              <input className='form-control' type="file" placeholder='Upload Image' onChange={uploadImage} /><br />
              <label htmlFor="">Upload File</label>
              <input className='form-control' type="file" placeholder='Upload File' onChange={uploadFile} /><br />
              <button className='btn btn-primary' type='submit'>Upload</button>
                
            </form>
                
          </div>
          
        </div>
      </div>



    </div>
  )
}

export default AddEbook;