import React, { useState } from 'react';
import Navbar from './components/NavBar/NavBar';
import MovieList from './components/MovieList/MovieList';
import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';
import './App.css'
import AddMovie from './components/AddMovie/AddMovie';
import { Routes, Route } from 'react-router-dom';
import Description from './components/Description/Description'


// Define initialMovies array using a default value
const initialMovies = [
  { title: 'The Wolf of Wall Street', trailerLink: 'https://www.youtube.com/embed/iszwuX1AK6A', description: 'The Wolf of Wall Street is a memoir by former stockbroker and trader Jordan Belfort, from poverty to the wealth', posterURL: 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_FMjpg_UX1000_.jpg', rating: 5 },
  { title: 'The Godfather', trailerLink: 'https://www.youtube.com/embed/UaVTIH8mujA', description: 'The Godfather II .In this second season there will have two stories, two character lines, two different parallel time lines.', posterURL: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg', rating: 4.5 },
  { title: 'The Dark Knight', trailerLink: 'https://www.youtube.com/embed/EXeTwQWrcwY', description: 'The film promises to bring viewers many action situations revolving around the last fight of Batman', posterURL: 'https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg', rating: 4.5 },
  { title: 'The Lord of the Rings', trailerLink: 'https://www.youtube.com/embed/7lwJOxN_gXc', description: 'The final battle for Middle-earth begins. Frodo and Sam, led by Gollum, continue their dangerous mission toward the fires of Mount .', posterURL: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg', rating: 4 },
  { title: 'Inception', trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0', description: 'The movie tells about Dom Cobb. He is not an ordinary thief. He is masterly on stolen, can penetrate into the unconscious of any person ', posterURL: 'https://resizing.flixster.com/8X8J8sNXmCWDBaxo3vueONLRj00=/206x305/v2/https://flxt.tmsimg.com/assets/p7825626_p_v8_af.jpg', rating: 5 },
  { title: 'Forrest Gump', trailerLink: 'https://www.youtube.com/embed/bLvqoHBptjg', description: 'Forrest Gump is set in the war in Vietnam, boy Forrest Gump was born and grew up not normally like any other children.', posterURL: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg', rating: 4 },
  { title: 'The Silence', trailerLink: 'https://www.youtube.com/embed/RuX2MQeb8UM', description: 'A young F.B.I. cadet must confide in an incarcerated and manipulative killer.', posterURL: 'https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg', rating: 3.5 },
  { title: 'Focus', trailerLink: 'https://www.youtube.com/embed/MxCRgtdAuBo', description: 'Focus (Also Known As: Fokus ) is a Comedy, Crime, Drama film directed by John Requa and written by Glenn Ficarra.', posterURL: 'https://upload.wikimedia.org/wikipedia/en/b/bf/2015_Focus_film_poster.png', rating: 4.5 },
  { title: 'Boston Strangler', trailerLink: 'https://www.youtube.com/embed/N_yfmHCkSB0', description: 'Reporters Loretta McLaughlin and Jean Cole bravely pursue the story of the Boston Strangler at great personal risk', posterURL: 'https://m.media-amazon.com/images/M/MV5BN2FmYmM1ODctNjkzNC00MzcyLTkyOWYtZmZjNjY2ZmU3MmI3XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg', rating: 3.5 },
  { title: 'Operation Fortune: Ruse de guerre', trailerLink: 'https://www.youtube.com/embed/W8Sqk1GcqxY', description: 'Five Eyes, the international intelligence agency, recruits MI6 agent Orson Fortune to prevent the sale of a deadly new weapons.', posterURL: 'https://m.media-amazon.com/images/M/MV5BNjcxOTJhZTEtMWFiYi00NTkwLTlkMzktZDQwMGQ0ZjM3YWU2XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg', rating: 4 },
];

function App() {
  // Define states for movies array, title filter, rating filter, and a new movie object
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(null);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };


  // Filter movies based on title and rating filters
  const filteredMovies = movies.filter((movie) => {
    // Filter by title
    if (titleFilter && !movie.title.toLowerCase().includes(titleFilter.toLowerCase())) {
      return false;
    }
    // Filter by rating
    if (ratingFilter && movie.rating !== ratingFilter) {
      return false;
    }
    return true;
  });

  // Handlers for title and rating filter changes
  const handleTitleFilterChange = (value) => {
    setTitleFilter(value);
  };

  const handleRatingFilterChange = (value) => {
    setRatingFilter(value);
  };


  return (
    <div>
      <Routes>
        {/* SHOW THIS COMPONENTS IF WE ARE IN THE ROOT PATH */}
        <Route path="/"
          element={<>
            {/* Render component with Navbar, Filter, MovieList  */}
            <Navbar />

            <Filter
              titleFilter={titleFilter}
              onTitleFilterChange={handleTitleFilterChange}
              ratingFilter={ratingFilter}
              onRatingFilterChange={handleRatingFilterChange}
            />

            <MovieList movies={filteredMovies} />
            <AddMovie addMovie={addMovie} />
            <hr></hr>

            <Footer /> </>} />
        {/*  SHOW THIS COMPONENT IF WE ARE IN : /:id  */}
        <Route path='/:id' element={<Description movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;