import { Fragment } from "react/jsx-runtime";
import { SpecialType } from "../../data/special";
import { SpecialTag } from "../SpecialTag/SpecialTag";

import "./SpecialTags.css";

export interface SpecialTagsProps {

    /**
     *  The list of special traits to show.
     */
    specials: SpecialType[];
    
    /**
     *  A callback called when user clicked a special tag.
     */
    onClick?: (special: SpecialType) => void;

    /**
     *  Should the tags be rendered as a list or as an inline list?
     */
    layout?: "list" | "inline";
};

/**
 *  This is a component that shows a collection of special traits.
 *  The list can be inlined or 
 */
export function SpecialTags({ specials, layout = "inline", onClick }: SpecialTagsProps) {

    if (layout === "list") return (
        <div className="specialtags-list">
            {specials.map(s => (
                <SpecialTag key={s} expanded special={s} onClick={onClick}/>
            ))}
        </div>
    );

    return (
        <>
            {specials.map((s, k) => (
                <Fragment key={s}>
                    <SpecialTag key={s} special={s} onClick={onClick}/>
                    {(k === (specials.length - 1) ? "" : ", ")}
                </Fragment>
            ))}
        </>
    );
}