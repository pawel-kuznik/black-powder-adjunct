import { SpecialType } from "../../data/special";
import "./SpecialTag.css";

export interface SpecialTagProps {
    special: SpecialType;
    onRemove: (special: SpecialType) => void;
};

export function SpecialTag({ special, onRemove } : SpecialTagProps) {

    const handleClick = () => {
        onRemove(special);
    };

    return (
        <span className="specialsinput-specialtag" onClick={handleClick}>
            {special}
        </span>
    );
};