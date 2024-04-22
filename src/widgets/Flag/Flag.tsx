import frenchSvg from "./assets/french.svg";
import unknownSvg from "./assets/unknown.svg";

import "./Flag.css";

export interface FlagProps {

    which: "french" | string | undefined;
};

export function Flag({ which }: FlagProps) {

    const svg = (() => {

        if (which === "french") return frenchSvg; 

        return unknownSvg;
    })();


    return (
        <img className="flag" alt={which} src={svg}/>
    );
}
