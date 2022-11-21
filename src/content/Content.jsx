import './Content.css'
import  axios from'axios';
import { useEffect, useState  } from 'react';
export default function Content() {
  const [movies , setMovies] = useState([]);

    const getMovies = async()=>{
    const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated", {
      params: {
        api_key : "1650be052ad504dcacebe6d51574ee3c",
      },
    });
    setMovies(response.data.results);
  };
  useEffect(()=> {
    getMovies();
  },[]);
  console.log(movies);
  return (
    <div className='content-wrapper'>Content</div>  );
}
