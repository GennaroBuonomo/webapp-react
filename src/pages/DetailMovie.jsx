import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ReviewForm from "../components/ReviewForm";

const DetailMovie = () => {
  //Recupero l'id passato alla rotta
  const { id } = useParams();

  //Definisco la variabile di stato
  const [movie, setMovie] = useState({})

  //Definisco il metodo che mi effettua la chiamata ajax per recuperare il libro attraverso l'id
  const fetchMovie = () => {
    axios.get(`http://localhost:3000/api/movies/${id}`).then((resp) => {
      setMovie(resp.data);
    })
    .catch((err) => console.log(err));
  };

  useEffect(fetchMovie, [])

  return (
   <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="detail-card">
          <div className="d-flex">
            <div className="cover-image">
              <img src={movie.image} alt={movie.title} />
            </div>
            <div className="text-details">
              <h1 className="title">{movie.title}</h1>
              <p className="release-year">{movie.release_year}</p>
              <p className="genre">{movie.genre}</p>
              <h3 className="director"><em>Diretto da: {movie.director}</em></h3>
              <p className="abstract">{movie.abstract}</p>
            </div>
          </div>
        </div>
        <div className="reviews">
          {movie.reviews && movie.reviews.map((review, index) => {
            return(
              <div className="review-card mb-4" key={index}>
               <strong>{review.name}</strong> - Voto: {review.vote}<br />
               <em>{review.text}</em>
              </div>
            );
          })}
        </div>
        <div className="review-form">
          <ReviewForm movieId={id} reloadReviews={fetchMovie} />
        </div>
      </div>
    </div>
   </div>
  )
}

export default DetailMovie
