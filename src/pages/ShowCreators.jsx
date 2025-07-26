import { Link, Outlet } from "react-router-dom" 

const ShowCreators = () => {
    return (
        <div>
            <h1>View All Creators</h1>
            <button><Link to=":id">View Creator</Link></button>

            <div className="primary-content">
                <Outlet />
            </div>
        </div>
    );
}

export default ShowCreators;