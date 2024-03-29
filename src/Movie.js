import React from 'react';
import moviePoster from './default-movie-poster.png';

const DEFAULT_PLACEHOLDER_IMAGE = moviePoster;

const Movie = ({ movie }) => {
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div className="movie">
            <h2>{movie.Title}</h2>
            <div>
                <img
                  width="200"
                  alt={`The movie titled: ${movie.Title}`}
                  src={poster}
                />
            </div>
            <p>({movie.Year})</p>
        </div>       
    );
};

export default Movie;