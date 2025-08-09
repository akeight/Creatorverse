const EditForm = ({ creator, setCreator, onSubmit, onDelete }) => {
  if (!creator) return <p>Loading creator form…</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit} className="container-fluid">
        <fieldset>
        
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={creator.name}
                onChange={handleChange}
            />

            <label>Image:</label>
            <input
                type="text"
                name="imageURL"
                value={creator.imageURL || ''}
                onChange={handleChange}
            />

            <label>Description:</label>
            <input
                type="text"
                name="description"
                value={creator.description}
            o   nChange={handleChange}
            />

            <label>Social Media Link:</label>
            <input
                type="text"
                name="url"
                value={creator.url}
                onChange={handleChange}
            />
        </fieldset>
    

        <input type="submit" value="Save Changes" />
        <input type="button" className="deleteBtn" onClick={onDelete} value="Delete" />
    </form>
  );
};

export default EditForm;