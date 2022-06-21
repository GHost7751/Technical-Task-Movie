import React,{FC} from 'react';
import IMovieProps from '../../Types/MovieTypes';
import './MovieCard.scss'

const MovieCard:FC<IMovieProps> = (props) => {
    const { 
        Title,
        Year,
        imdbID,
        Type,
        Poster
    } = props

    return (
        <div id={imdbID} className='card-movie'>
            <div className='card-images'>
            
             {Poster === 'N/A' ? (
                 <img
                 src={`https://via.placeholder.com/300x400?text=${Title}`}
                 />
                 ) : (
                     <img  src={Poster} style={{height: '400px',width:'100%'}} />
                     )}
            </div>
            <div className='card-content'>
                <h3 className='movie-name'>{Title}</h3>
                <span className='movie-tags'>Year : {Year}</span>
                <span className='movie-tags'>imdbID: {imdbID}</span>
                <span className='movie-tags'>Type : {Type}</span>
            </div>
         </div>   
    );
};

export default MovieCard;