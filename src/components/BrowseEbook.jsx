// import { AnimatePresence ,motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
// import toast from 'react-hot-toast';
import {Link} from 'react-router-dom';

const BrowseEbook = () => {

  const [ebookList,setEbookList] = useState([]);


  const fetchEbookData = async () => {
    const res = await fetch('http://localhost:5000/Ebook/getall');
    console.log(res.status);
    
    const data= await res.json();
   
    console.table(data);

    setEbookList(data);
  };

  
// useeffect is use for the result on browse ebook without click the button

  useEffect(() => {
  fetchEbookData();
  }, []);
  
//   const deleteUser =async(id)=>{
//     console.log(id)
//     const res = await fetch('http://localhost:5000/user/delete/'+id,{
//     method :'DELETE'
//    });
//    console.log(res.status)
//    // to show the deleted component on page without refresh the page.
//    if (res.status === 200){
//    fetchUserData();
//    toast.success('User Deleted Successfully');
//    }
//   }


const displayEbooks = () => {
    
    return ebookList.map((ebook) => {
   
   return <div className='col-md-3 mb-4'>

   <div className='card'>

    <img className='card-img-top'  src={"http://localhost:5000/"+ebook.Image} alt="" />
    <div className='card-body'>
        <p>{ebook.Category}</p>
        <h4>{ebook.Title}</h4>
        <p className='fw-bold'>{ebook.Author}</p>
       <Link to={'/view/'+ebook._id} className='btn btn-primary'>View more</Link>


    </div>
   </div>
    </div>
})
}
  

  return (

    <div className='vh-100'>
        <h2 className='text-center'>EBook Browser</h2>
     <div className='container'>
       <div className='row'>
        {displayEbooks()}
       </div>

</div>
</div>

  )
}

export default BrowseEbook;