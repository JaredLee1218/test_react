import React from "react";
import PropTypes from 'prop-types';
import './Movie.css'
import { Link } from "react-router-dom";

function Movie({rate,year,title,summary,poster,genres}) {
    const isSummary = summary.length;

    return (
        <div className="movie">
            <Link
            to={{
            pathname:'/movie-detail',
            state: {rate,year,title,summary,poster,genres},
            }}>
                <img src={poster} alt={title} title={title} />
                <div className="movice__data">
                    <h2 className="movie__rate">{rate} / 10</h2>
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index)=> {
                            return <li key={index} className="movie__genre">{genre}</li>;
                        })}
                    </ul>
                    {
                    isSummary
                    ? <p className="movie__summary"> {summary.slice(0,180)}... </p>
                    : <h4 className="movie__summary"> No Summary </h4>
                    }               
                </div>  
            </Link>
        </div>
        )
}

Movie.prototype = { 
    rate: PropTypes.number.isRequired, 
    year: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, 
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;