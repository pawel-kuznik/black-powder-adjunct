import { HorizontalDecoratorCap } from './HorizontalDecoratorCap';
import "./HorizontalDecorator.css";

export function HorizontalDecorator() {

    return (
        <div className="horizontaldecorator">
            <HorizontalDecoratorCap/>
            <div className="horizontaldecorator-line"></div>
        </div>
    );
};
