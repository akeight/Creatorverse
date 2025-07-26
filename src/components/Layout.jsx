import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return ( 
        <div>
            <h1>Creatorverse</h1>
                <button><Link to="add-creator">Add New Creator</Link></button>
                <button><Link to="view">View All Creators</Link></button>
            
            <div className="primary-content">
                <Outlet />
            </div>
        </div>
     );
}
 
export default Layout;