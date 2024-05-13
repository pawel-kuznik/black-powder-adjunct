import { Link } from "react-router-dom";
import { useState } from "react";
import { ScaleSelector } from "./ScaleSelector";

import "./MainMenu.css";

export function MainMenu() {

    const [ expanded, setExpanded ] = useState<boolean>(false);

    const handleToggleClick = () => {
        setExpanded(!expanded);
    };

    const menuCss = [ "mainmenu", `mainmenu-${expanded ? "expanded" : "collapsed"}` ];
    const buttonCSS = [ "mainmenu-button", `mainmenu-button-${expanded ? "expanded" : "collapsed"}`];

    return (
        <div>
            <button className={buttonCSS.join(" ")} onClick={handleToggleClick}>MENU</button>
            <nav className={menuCss.join(" ")}>
                <h1>Black Powder Adjunct</h1>
                <div className="mainmenu-main">
                    <Link to="/rules">Rules</Link>
                    {/* <Link to="/scenarios">Scenarios</Link> */}
                    <Link to="/about">About</Link>
                    <Link to="/commanders">Commanders</Link>
                    <Link to="/units">Units</Link>
                    <Link to="/lists">Lists</Link>
                    <Link to="/changelog">Changelog</Link>
                </div>

                <div className="mainmenu-scale">
                    <ScaleSelector/>
                </div>
                
                <div className="mainmenu-footer">
                    <a href="https://github.com/pawel-kuznik/black-powder-adjunct/issues" target="_blank">Issues</a>
                    <a href="https://github.com/users/pawel-kuznik/projects/4/views/1" target="_blank">Roadmap</a>
                </div>
            </nav>
        </div>
    );
};