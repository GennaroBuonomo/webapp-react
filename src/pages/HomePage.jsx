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
        <div className="row gy-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card-movie">
              <img src="./imgs/spiderman.jpeg" className="cover-movie-card" alt="film" />
              <div className="overlay">
                <h1>Titolo del film</h1>
                <p>direttore delle riprese</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   )
}

export default HomePage
