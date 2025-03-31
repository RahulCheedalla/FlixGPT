import React, { useEffect, useRef, useState } from 'react';
import './Title.css';
import { Link } from 'react-router-dom';

const Title = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmE3MTM4MDhlODI0MjQ2OTc2MzZlOWE2NTM3ZWY0YiIsIm5iZiI6MTc0Mjg4ODIzNy45NDEsInN1YiI6IjY3ZTI1ZDJkMGVlNTNkNGU3MWYwOTIxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lMZoga1fA_iweeB07fqisYzfgn_HNOHmbzSVQoHgUUI'
    }
  };
  
  
    const handleWheel = (event) => {
      event.preventDefault();
      if (cardsRef.current) {
        cardsRef.current.scrollLeft += event.deltaY;
      }
    };



    useEffect(()=>{
        const API_KEY = "fcc80e990c1be9fd8d2d532f24a3cd10";
        const url = `https://api.themoviedb.org/3/movie/${category?category:"popular"}?api_key=${API_KEY}&language=en-US&page=1`;
 
        fetch(url, options)
        .then(res => res.json())
        .then(res => setApiData(res.results)) 
        .catch(err => console.error(err));
        console.log(category,"movie");
        

        cardsRef.current.addEventListener('wheel', handleWheel);

    },[])
   

  return (
    <div className='title-cards'>
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className='card-list' ref={cardsRef}>
            {apiData?.length>0 && apiData?.map((card, index)=>{
                return <Link to={`/player/${card.id}` }className='card' key={index}>
                    <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=""/>
                    <p>{card.original_title}</p>
                </Link>
            })}
        </div>
    </div>
  )
}
export default Title 