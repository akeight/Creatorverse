import { supabase } from "../client";
import AddForm from "../components/AddForm";
import { useState } from "react";

const AddCreator = () => {
    const [creator, setCreator] = useState({
        name: '',
        url: '',
        description: '',
        imageURL: '',
    });

    const addCharacter = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('creators')
            .insert([creator]);

            if (error) {
                console.error('Error adding creator:', error);
            } else {
                console.log('Creator added:', data);
        window.location = "/";
    }
  };

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.name]: e.target.value });
  };

    return (
        <div>
            <h2><i class="fa-whiteboard fa-semibold fa-plus"></i>Add Content Creator</h2>
            <AddForm creator={creator} onChange={handleChange} onSubmit={addCharacter} />
        </div>
    );
}

export default AddCreator;