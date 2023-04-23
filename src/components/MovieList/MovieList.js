import React from 'react';
import "./MovieList.css"
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
    return (
        // This div will contain all the MovieCard components in the MovieList.
        <div className="movie-list" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            {/* This map function will loop through each movie in the array */}
            {movies?.map((el, index) => (
                <Link key={index} to={"/" + index}>
                    <MovieCard
                        key={index}
                        el={el}
                    />
                </Link>
            ))}
        </div>
    );
}

export default MovieList;




