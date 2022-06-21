import React, { FC, useEffect, useState } from 'react';
import IMovieProps from '../../Types/MovieTypes';
import { fetchMovie } from '../../Service/FetchMovie';
import { Spinner } from '../Spinner/Spinner';
import MovieCard from './MovieCard';
import { Pagination } from '@mui/material';

const Movie:FC = () => {
    const [value,setValue] = useState<IMovieProps[]>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [page,setPage] = useState<number>(1);
    const [search,setSearch] = useState<string>('matrix')

    const movie = async () : Promise<void> => {
        setLoading(true)
        setValue(await fetchMovie(search,page))
    }

   
      
    useEffect(() => {
        movie()
    },[search,page])



    return (
        <div className='container content'>
            <br />
            <div className='movies'>
                
                {value.length ? (value
                    .map((movie) => <MovieCard key={movie.imdbID} {...movie} />)

                ) : (
                    <Spinner />
                )
                   
                }
             </div>
            <br />
            <Pagination  className='pagination'
        count={10}
            page={page}
            onChange={(_,num) => setPage(num)}
        />
        </div>
    );
};

export default Movie;