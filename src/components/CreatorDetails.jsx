import { Link } from "react-router-dom";

const CreatorDetails = ({creator}) => {

  const createdAtUTC = creator.created_at;
  const localDate = new Date(createdAtUTC);
  const formatted = localDate.toLocaleString();

  return (
    <div className="details container">
    <article className="details-card">
        <header className="card-header">
          <img className="card-image" src={creator.imageURL} alt={creator.name} />
          <a href={`https://instagram.com/${creator.url}`} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-2xl fa-instagram"></i>
          </a>
        </header>
        <hgroup>
          <h2>{creator.name}</h2>
            <p>{creator.description}</p><br />
            <small><em>Created: {formatted}</em></small><br />
        </hgroup>
        <footer>
          
          <Link to={`/edit/${creator.id}`}><span><i class="fa-whiteboard fa-semibold fa-pen-to-square"></i></span><sub>Edit</sub></Link>
        </footer>
    </article>
    </div>
  );
}

export default CreatorDetails;