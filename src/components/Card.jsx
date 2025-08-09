import { Link } from "react-router-dom";  

const Card = ({creator}) => {
    return ( 
        <article className="card">
            <header className="card-header">
                <img className="card-image" src={creator.imageURL} alt={creator.name} />
                <a href={`https://instagram.com/${creator.url}`} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-2xl fa-instagram"></i>
                </a>
            </header>
            <hgroup>
                <h3>{creator.name}</h3>
                <p>{creator.description}</p>
            </hgroup>
            <footer>
              <Link to={`/${creator.id}`}><span><i class="fa-whiteboard fa-semibold fa-circle-info"></i></span><sub>View</sub></Link><br />
              <Link to={`/edit/${creator.id}`}><span><i class="fa-whiteboard fa-semibold fa-pen-to-square"></i></span><sub>Edit</sub></Link>
            </footer>
        </article>
     );
}
 
export default Card;