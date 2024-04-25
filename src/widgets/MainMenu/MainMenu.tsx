import { Link } from "react-router-dom";

import "./MainMenu.css";

export function MainMenu() {

    return (
        <nav className="mainmenu">
            {/* <Link to="/rules">Rules</Link> */}
            <Link to="/scenarios">Scenarios</Link>
            <Link to="/commanders">Commanders</Link>
            <Link to="/units">Units</Link>
            <Link to="/lists">Lists</Link>
            <Link to="/about">About</Link>
            <Link to="/changelog">Changelog</Link>
        </nav>
    );
};