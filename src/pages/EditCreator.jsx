import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import { supabase } from "../client";

const EditCreator = () => {
    const { id } = useParams();
    console.log("Edit route ID:", id);

    const [creator, setCreator] = useState({
        name: '',
        url: '',
        description: '',
        imageURL: '',
    });

    useEffect(() => {
        async function fetchCreator() {
            const { data, error } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single();

                if (error) {
                    console.error('Error fetching creator:', error);
                } else {
                setCreator(data);
                }
        }

        fetchCreator();
        }, [id]);


    const editCreator = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase
            .from("creators")
            .update(creator) // creator comes from state
            .eq("id", id);

        if (error) {
            console.error("Error updating creator:", error);
        } else {
            console.log("Updated!", data);
            window.location = "/creators"; // redirect to view page
        }
    };


    const deleteCreator = async (e) => {
        e.preventDefault();

        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', id);

        if (error) {
            console.error("Error deleting creator:", error);
        } else {
            window.location = '/creators'; // or just "/"
        }
    };


    return (
        <div>
            <h2 className="home-landing"><i class="fa-whiteboard fa-semibold fa-pen-to-square"></i> Edit Creator</h2>
            <EditForm creator={creator} setCreator={setCreator} onSubmit={editCreator} onDelete={deleteCreator}/>
        </div>
        
    );
}

export default EditCreator;