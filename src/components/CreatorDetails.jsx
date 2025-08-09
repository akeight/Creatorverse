import { Link } from "react-router-dom";

const CreatorDetails = ({creator}) => {

  const createdAtUTC = creator.created_at;
  const localDate = new Date(createdAtUTC);
  const formatted = localDate.toLocaleString();

  return (
    <article>
        <header>
          <img className="creator-image" src={creator.imageURL} alt={creator.name} />
          <h2>{creator.name}</h2>
        </header>
      <p><i class="fa-brands fa-xl fa-instagram"></i> @{creator.url}</p>
      <p>Description: {creator.description}</p>
      <p>Created: {formatted}</p>
      {/* Add more spicy details here */}
      <footer>
       <span><i class="fa-whiteboard fa-semibold fa-pen-to-square"></i></span> <Link to={`/edit/${creator.id}`}>Edit Creator</Link>
      </footer>
    </article>
  );
}

export default CreatorDetails;