// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const getActionMovies = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )

  const getComedyMovies = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="video-container">
        <h1 className="heading">Action movies</h1>
        <MoviesSlider movieDetails={getActionMovies} />
        <h1 className="heading">Comedy movies</h1>
        <MoviesSlider movieDetails={getComedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
