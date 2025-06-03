import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react"; //hook
import "../CSS/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setsearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load..");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  // const movies = [
  //   {
  //     id: 1,
  //     title: "John Wick",
  //     release_date: "2020",
  //     url: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 2,
  //     title: "Terminator",
  //     release_date: "1990",
  //     url: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 3,
  //     title: "Hunger Game",4
  //     url: "https://via.placeholder.com/150",
  //   },
  //   {
  //     id: 4,
  //     title: "Water World",
  //     release_date: "2025",
  //     url: "https://via.placeholder.com/150",
  //   },
  // ];

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    // alert(searchQuery);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies..");
    } finally {
      setLoading(false);
    }
    // setsearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading..</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
