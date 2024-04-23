import frenchSvg from "./assets/french.svg";
import britishSvg from "./assets/british.svg";
import unknownSvg from "./assets/unknown.svg";

import "./Flag.css";

export interface FlagProps {

    which: "french" | "british" | string | undefined;
};

export function Flag({ which }: FlagProps) {

    const svg = (() => {

        if (which === "french") return frenchSvg;
        if (which === "british") return britishSvg;

        return unknownSvg;
    })();


    return (
        <img className="flag" alt={which} src={svg}/>
    );
}
