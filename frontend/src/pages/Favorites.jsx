import "../CSS/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>

      {favorites.length > 0 ? (
        <div className="favorites-grid-wrapper">
          <div className="movie-grid">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="favorites-empty">
          <h2>No Favorites yet...</h2>
          <p>Start adding movies to your favorite list</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;
