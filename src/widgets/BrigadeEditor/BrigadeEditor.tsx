import { useState } from "react";
import { CommanderEditor } from "../CommanderEditor";

/**
 *  This editor allows for naming the brigade, selecting a commander,
 *  and assigning units to the brigade. The editor in turn will show
 *  a listing of all units and calculate points.
 * 
 *  @note Many scenarios have rules for customization for specific
 *  brigades. It's an interesting idea, but these limits will be
 *  omitted from the editor. 
 */
export function BrigadeEditor() {

    const [ points, setPoints ] = useState<number>(0);

    return (
        <section>
            <header>
                <span> {points} points</span>
            </header>
            <CommanderEditor/>
        </section>
    );
};
