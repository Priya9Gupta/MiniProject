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
  



const displayEbooks = () => {
    
    return ebookList.map((ebook) => {
   
   return <div className='col-md-3 mb-4'>

   <div className='card'>

    <img className='card-img-top' style={{height:'400px'}} src={"http://localhost:5000/"+ebook.Image} alt="" />
    <div className='card-body'>
        <p>{ebook.Category}</p>
        <h>{ebook.Title}</h>
        <h5>{ebook.Author}</h5>
        <p className='fw-bold'>{ebook.Author}</p>
       <Link to={'/view/'+ebook._id} className='btn btn-primary'>View more</Link>


    </div>
   </div>
    </div>
})
}
  
            
  return (
           
    <div className='vh-150' style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzs5zkATRBmBgGuxhg5EV7aJm7CGGEeOTi1DRtFpViRKCEGWssp3EMHeVoMg_jelnyp4w&usqp=CAU")'}}>
     <div className='container py-4 '>
       <div className='row'>
        {displayEbooks()}
       </div>

</div>
</div>

  )
}

export default BrowseEbook;