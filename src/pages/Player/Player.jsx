import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

   const [apiData,setApiData] = useState({
      name: "",
      key: "",
      published_at: "",
      typeof: ""
   })

    const {id} = useParams();
    const navigate = useNavigate();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2M4MGU5OTBjMWJlOWZkOGQyZDUzMmYyNGEzY2QxMCIsIm5iZiI6MTc0Mjk2NjQ5Mi44OTkwMDAyLCJzdWIiOiI2N2UzOGVkY2UyOGFmNDFjZmM3NjJlYzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vImd9jCuvfbrEBNgOnFcmD9LGbe-XBpAaOfVwcVBxQI'
    }
  };
  

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{
        navigate(-2)
      }}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='Player-Info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  
  )
}

export default Player
