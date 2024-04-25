import { Fragment } from "react/jsx-runtime";
import { SpecialType } from "../../data/special";
import { SpecialTag } from "../SpecialTag/SpecialTag";

export interface SpecialTagsProps {
    specials: SpecialType[];
    onClick?: (special: SpecialType) => void;
};

export function SpecialTags({ specials, onClick }: SpecialTagsProps) {

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