import React from 'react';
import "./MovieCard.css"


export default function MovieCard({ el }) {

    return (
        <div className='MovieCard'>
            <div className='d-flex' >
                <img width="300" src={el.posterURL} alt={`${el.title} poster`} />
            </div >
            <div className='d-flex' >
                <h2>{el.title}</h2>
                <p>{el.description}</p>
                <h3>Rating : {el.rating}</h3>
                <h4>{el.posterURL}</h4>
            </div>
        </div >
    )
}
