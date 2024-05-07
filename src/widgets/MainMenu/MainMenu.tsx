import { Link } from "react-router-dom";

import "./MainMenu.css";
import { useScaleStore } from "../../state";

export function MainMenu() {

    const { change } = useScaleStore();

    return (
        <nav className="mainmenu">
            <h1>Black Powder Adjunct</h1>
            <Link to="/rules">Rules</Link>
            {/* <Link to="/scenarios">Scenarios</Link> */}
            <Link to="/about">About</Link>
            <Link to="/commanders">Commanders</Link>
            <Link to="/units">Units</Link>
            <Link to="/lists">Lists</Link>
            <Link to="/changelog">Changelog</Link>
            <a href="https://github.com/pawel-kuznik/black-powder-adjunct/issues" target="_blank">Issues</a>
            <a href="https://github.com/users/pawel-kuznik/projects/4/views/1" target="_blank">Roadmap</a>
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