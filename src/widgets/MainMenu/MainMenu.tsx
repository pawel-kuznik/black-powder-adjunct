import { Link } from "react-router-dom";

import "./MainMenu.css";
import { useScaleStore } from "../../state";

export function MainMenu() {

    const { change } = useScaleStore();

    return (
        <nav className="mainmenu">
            {/* <Link to="/rules">Rules</Link> */}
            <Link to="/scenarios">Scenarios</Link>
            <Link to="/commanders">Commanders</Link>
            <Link to="/units">Units</Link>
            <Link to="/lists">Lists</Link>
            <Link to="/about">About</Link>
            <Link to="/changelog">Changelog</Link>
            <div>
                <button onClick={() => change("1:1")}>Change scale to 1:1</button>
            </div>
            <div>
                <button onClick={() => change("1:2")}>Change scale to 1:2</button>
            </div>
            <div>
                <button onClick={() => change("inch:cm")}>Change scale to inch:cm</button>
            </div>
        </nav>

    );
};