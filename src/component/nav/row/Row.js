import React from 'react'
import './Row.css';
import Card from '../card/Card'
import { useState, useEffect } from 'react';
import axios from 'axios';




export default function Row(props) {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const response = await axios.get(props.url);
        setMovies(response.data.results)
    };

    useEffect(() => {
        fetchMovies();
    });
    return (
        <div className='row_wrapper'>

            <h3 className='row_title'>{props.title}</h3>
            <div className='row_cards'>
                {
                    movies.map((el) => {
                        return <Card title={el.title} poster={el.backdrop_path} />;
                    }
                    )}
            </div>
        </div>
    );
}
