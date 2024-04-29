import { ReactNode } from "react";
import "./Title.css";

export interface TitleProps {

    /**
     *  The text to show in the title.
     */
    text: string;

    /**
     *  The level of the title.
     */
    level?: number;

    /**
     *  A react node with additional controls.
     */
    controls?: ReactNode;
};

/**
 *  A component used to create a title.
 */
export function Title({ text, level = 1, controls }: TitleProps) {

    const contents = (<>
        <span>{text}</span>
        {controls && <div className="title-controls">{controls}</div>}
    </>);

    if (level === 2) return (<h2 className="title">{contents}</h2>);

    return (<h1 className="title">{contents}</h1>);
};
