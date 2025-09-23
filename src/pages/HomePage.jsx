import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const HomePage = () => {
  //Definisco le variabili di stato
  const [movies, setMovies] = useState([]);

  //funzione che recupera i film con la chiamata ajax
  const fetchMovies = () => {
    axios.get("http://localhost:3000/api/movies").then((resp) => {
      setMovies(resp.data)
    })
  };

  //Utilizzo useEffect per recuperare la lista dei film
  useEffect(fetchMovies, []);

    return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center mb-3">
          <h1>BoolMovies</h1>
          <h2>
            <i>Film per i veri appassionati</i>
          </h2>
        </div>
      </div>
        <div className="row gy-3">
          {movies.map((movie) => {
            const { id, image, title, director } = movie;
            return(
              <div className="col-12 col-md-6 col-lg-4" key={id}>
                <Link to={`/movies/${id}`}>
                 <div className="card-movie">
                   <img src={image} className="cover-movie-card" alt={title} />
                   <div className="overlay">
                     <h1>{title}</h1>
                     <p>{movie.director}</p>
                   </div>
                 </div>         
                </Link>
              </div>
            );
          })}
      </div>
    </div>
   );
};

export default HomePage
