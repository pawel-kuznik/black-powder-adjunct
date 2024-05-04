export interface SimpleRuleProps {
    title: string;
    description: string;
};

export function SimpleRule({ title, description } : SimpleRuleProps) {

    return (
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};