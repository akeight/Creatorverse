import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom" 
import { supabase } from "../client";
import CreatorList from "../components/CreatorList";

const ShowCreators = () => {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
         async function fetchCreators() {
            const {data, error} = await supabase
                .from('creators')
                .select()
                .order('created_at', { ascending: false })
            
            if 
                (error) console.log('Error getting creators');
            else
                setCreators(data);
                console.log(data);
        }
        fetchCreators();
    }, []);  

        
    return (
        <div>
            <h2><i class="fa-whiteboard fa-semibold fa-list-music"></i> List of Creators</h2>
            <CreatorList creators={creators} />

            <div className="primary-content">
                <Outlet />
            </div>
        </div>
    );
}

export default ShowCreators;