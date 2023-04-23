import "./Description.css";
import {useParams} from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

export default function Description({movies}) {

    // console.log(movies.length);
    let params = useParams();
    return (
        <div className="desc">
            {  ( isNaN(params.id) || movies.length <= parseInt(params.id)) ?  <p>No Movie With this id </p> :
            
            <>
            <MovieCard el={movies[params.id]} /> 
            <iframe src={movies[params.id].trailerLink}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </>
            }
        </div>
    )
}
