import React from 'react'

const HomePage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>BoolMovies</h1>
          <h2>
            <i>Film per i veri appassionati</i>
          </h2>
        </div>
      </div>
      <div className="row gy-3 my-4">
         <div className="col-12">
          <div className="card-movie">
            <img src="./public/Pirates of the Caribbean.jpeg" alt="Film" />
            <div className="overlay">
              <h2>Titolo del film</h2>
              <p>autore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   )
}

export default HomePage
