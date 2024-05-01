import { useTranslation } from "react-i18next";
import { CommanderDescriptor } from "../../data/commanders";
import { Button } from "../Button";
import { CommanderCard } from "../CommanderCard";

export interface CommanderItemProps {

    commander: CommanderDescriptor;

    onPick?: (commander: CommanderDescriptor) => void;

    onRemove?: (commander: CommanderDescriptor) => void;
};

/**
 *  A component reprensenting a commander inside the CommanderPicker.
 */
export function CommanderItem({ commander, onPick, onRemove }: CommanderItemProps) {

    const { t } = useTranslation();

    const handlePickClick = () => {

        onPick?.(commander);
    };

    const handleRemoveClick = () => {
        onRemove?.(commander);
    };

    const controls = (<>
        {onPick && <Button label={t("commanderpicker.commanderitem.pick.label")} onClick={handlePickClick}/>}
        {onRemove && <Button label={t("commanderpicker.commanderitem.remove.label")} style="red" onClick={handleRemoveClick}/>}
    </>);

    return (<CommanderCard commander={commander} controls={controls} />);
};
