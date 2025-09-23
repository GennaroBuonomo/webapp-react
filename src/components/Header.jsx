import React from 'react'

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col-12">
          <img className="logo" src="/imgs/Logo_movies.png" />
          <h2 className="title-style">
            BoolMovies: <span className="fst-italic">Scegli il tuo film!</span>
          </h2>
        </div>
      </div>
    </header>
  )
}

export default Header
