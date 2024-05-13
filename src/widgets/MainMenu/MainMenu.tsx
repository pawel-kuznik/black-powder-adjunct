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

    const handleMainSectionClick = () => {
        setExpanded(false);
    };

    return (
        <div>
            <button className={buttonCSS.join(" ")} onClick={handleToggleClick}>MENU</button>
            <nav className={menuCss.join(" ")}>
                <img src="/black-powder-adjunct/main_logo.svg" alt="Black Powder Adjunct logo"/>
                <div className="mainmenu-main" onClick={handleMainSectionClick}>
                    {/* <Link to="/scenarios">Scenarios</Link> */}
                    <Link to="/about">About</Link>
                    <Link to="/rules">Rules</Link>
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