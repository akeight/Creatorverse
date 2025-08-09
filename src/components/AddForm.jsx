const AddForm = ({onSubmit, onChange, creator}) => {
    return ( 
         <>
    <form onSubmit={onSubmit} className="hard-shadow">
      <h2><i class="fa-whiteboard fa-semibold fa-plus"></i>Add Content Creator</h2>

        <div className="container-fluid">
          <fieldset>  
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="eg PookieFace"
              value={creator.name}
              onChange={onChange}
            />

            <label>Image URL:</label>
            <small id="email-helper">
              Provide a link to an image of your creator. Be sure to include the http://
            </small>
            <input
              type="text"
              name="imageURL"
              value={creator.imageURL || ''}
              onChange={onChange}
          />
            

            <label>Description:</label>
            <small id="email-helper">
              Provide a description of the creator. Who are they? What makes them interesting?
            </small>
            <input
              type="text"
              name="description"
              value={creator.description}
              onChange={onChange}
            />

            <label>Instagram:</label>
            <small id="email-helper">
              The creator's Instagram handle (without the @)
            </small>
            <input
              type="text"
              name="url"
              value={creator.url}
              onChange={onChange}
            />
          </fieldset>
          <input type="submit" id="submit" value="Add Creator" />
          <input type="reset" onClick={() => window.location.reload()} value="Reset Form" />
        </div>
    </form>
    </>
     );
}

export default AddForm;