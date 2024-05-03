import frenchSvg from "./assets/french.svg";
import britishSvg from "./assets/british.svg";
import prussianSvg from "./assets/prussian.svg";
import unknownSvg from "./assets/unknown.svg";

import "./Flag.css";

export interface FlagProps {

    which: "french" | "british" | "prussian" | string | undefined;
};

/**
 *  A component that renders a flag. The flags aren't rendered with historical accuracy
 *  cause this would cause some issues with layouts (especially the exact sizes of flags,
 *  fields, and stipes). Instead readability is the priority for all flags.
 */
export function Flag({ which }: FlagProps) {

    const svg = (() => {

        if (which === "french") return frenchSvg;
        if (which === "british") return britishSvg;
        if (which === "prussian") return prussianSvg;

        return unknownSvg;
    })();


    return (
        <div>
            <img className="flag" alt={which} src={svg}/>
        </div>
    );
}
