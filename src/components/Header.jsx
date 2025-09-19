import React from 'react'

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col-12">
          <img src="../public/Logo_movies.png" />
          <h2 className="title-style">
            BoolMovies: <span className="fst-italic">la tua lista</span>
          </h2>
        </div>
      </div>
    </header>
  )
}

export default Header
