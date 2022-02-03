// import "../sass/components/_home.scss";
import "../sass/_nav.scss"
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav class="navbar">
            <div class="brand-title">Théo Laberrondo</div>
            <a href="/" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            </a>
            <div class="navbar-links">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projet">Projet</Link></li>
                <li><Link to="/cv">Cv</Link></li>
            </ul>
            </div>
        </nav>
        
    );
}

export default Nav;