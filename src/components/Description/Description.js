import "./Description.css";
import {useParams, useNavigate} from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

export default function Description({movies}) {

    // console.log(movies.length);
    let params = useParams();
    let navigate = useNavigate(); // add this line to get the navigate function

    // define the onClick event handler for the button
    function handleBackToHome() {
        navigate('/'); // navigate to the home page when the button is clicked
    }

    return (
        <div className="desc">
            {  ( isNaN(params.id) || movies.length <= parseInt(params.id)) ?  <p>No Movie With this id </p> :
            
            <>
            <MovieCard el={movies[params.id]} /> 
            <iframe src={movies[params.id].trailerLink}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            <button id="onclick" onClick={handleBackToHome}>Back to home</button> {/* add onClick event handler to the button */}
            </>
            }
        </div>
    )
}
