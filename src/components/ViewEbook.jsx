import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewEbook = () => {

    const {id} = useParams();
    const [ebookData, setEbookData] = useState(null);

    const fetchEbookData = async () => {
        const res = await fetch('http://localhost:5000/ebook/getbyid/'+id);
        const data = await res.json();
        console.log(data);
        setEbookData(data);
    }

    useEffect(() => {
      fetchEbookData();
    }, []);
    

    const displayEbook = () => {
        if(ebookData!==null){
            return <div className='card'>
                    <div className="card-body">
                        <img className='d-block m-auto w-75' src={"http://localhost:5000/"+ebookData.Image} alt="" />
                        <h1>{ebookData.Title}</h1> 

                        <a href={"http://localhost:5000/"+ebookData.File} target='_blank'>Read Novel</a>
                    </div>
            </div>
        }
    }
    
  return (
    <div>
        <div className="container">
            {displayEbook()}
        </div>
    </div>
  )
}

export default ViewEbook