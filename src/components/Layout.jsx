import { Link, Outlet } from "react-router-dom"
import { useState, useEffect } from "react";

const Layout = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Load saved theme on mount
        const savedTheme = localStorage.getItem("theme") || "light";
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
            setTheme(newTheme);
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
    };

    return ( 
        <>
            <header className="container-fluid">
                <nav>
                    <ul>
                        <Link to="/"><li><h1>Creatorverse</h1></li></Link>
                    </ul>
                    <ul>
                        <li><Link to="/"><div role="button" class="outline" tabindex="0">View All Creators</div></Link></li>
                        <li><Link to="add-creator"><div role="button" tabindex="0"><i class="fa-whiteboard fa-semibold fa-circle-plus"></i>New Creator</div></Link></li>
                        <li><button id="toggle-theme" class="outline" onClick={toggleTheme}>
                            {theme === "dark" ? 
                                <i class="fa-whiteboard fa-semibold fa-sun"></i> 
                            : 
                                <i class="fa-whiteboard fa-semibold fa-moon"></i>
                            }
                            </button></li>
                    </ul>
                </nav>
            </header>
            <main className="primary-content container">
                <Outlet />
            </main>
        </>
     );
}
 
export default Layout;