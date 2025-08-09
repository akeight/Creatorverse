import {useParams, Outlet} from "react-router-dom"
import { useState, useEffect } from "react";
import { supabase } from "../client";
import CreatorDetails from "../components/CreatorDetails";


const CreatorDetailsPage = () => {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);
    const [loading, setLoading] = useState(true);

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
            console.log(data);
            
        }
        setLoading(false);
        }

        fetchCreator();
    }, [id]);


    if (loading) return <p>Loading creator details…</p>;
    if (!creator) return <p>No creator found!</p>;

    return (
        <div className="container-fluid">
            <h2><i class="fa-whiteboard fa-semibold fa-circle-info"></i> Creator Details</h2>
            <CreatorDetails creator={creator} />
            <div className="primary-content">
                <Outlet />
            </div>
        </div>
        
    );
}

export default CreatorDetailsPage;