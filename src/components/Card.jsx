import { Link } from "react-router-dom";  

const Card = ({creator}) => {
    return ( 
        <article>
            <header>
                <img className="card-image" src={creator.imageURL} alt={creator.name} />
                <h2>{creator.name}</h2>
            </header>
            <p><i class="fa-brands fa-xl fa-instagram"></i> @{creator.url}</p>
            <p>Description: {creator.description}</p>
            <footer>
              <span><i class="fa-whiteboard fa-semibold fa-circle-info"></i></span>  <Link to={`/creators/${creator.id}`}>View Creator</Link>
            </footer>
        </article>
     );
}
 
export default Card;