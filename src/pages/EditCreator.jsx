import { Outlet } from "react-router-dom";

const EditCreator = () => {
    return (
        <div>
            <h1>Edit Creator</h1>
            <button>Save</button>
            <button>Delete</button>

            <div className="primary-content">
                <Outlet />
            </div>
        </div>
    );
}

export default EditCreator;