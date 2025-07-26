import { Link, Outlet } from "react-router-dom"

const ViewCreator = () => {
    return (
        <div>
            <h1>Creator Details</h1>
            <button><Link to="edit">Edit Creator</Link></button>

            <div className="primary-content">
                <Outlet />
            </div>
        </div>
    );
}

export default ViewCreator;