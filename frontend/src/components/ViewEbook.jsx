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
                        <img className='m-1 w-50' src={"http://localhost:5000/"+ebookData.Image} alt="" />
                        <h2>{ebookData.Title}</h2> 

                        <a href={"http://localhost:5000/"+ebookData.File} target='_blank' style={{fontSize:'20px'}}>Read Novel</a>
                    </div>
            </div>
        }
    }
    
  return (
    <div style={{backgroundRepeat:'no-repeat',backgroundSize:'cover',width:'1300px',height:'700px',backgroundImage:'url("https://p4.wallpaperbetter.com/wallpaper/368/945/162/landscape-nature-street-night-wallpaper-preview.jpg")'}}>
        <div style={{width:'350px',height:'1300px',marginLeft:'400px',paddingTop:'120px'}}>
            {displayEbook()}
        </div>
    </div>
  )
}

export default ViewEbook;