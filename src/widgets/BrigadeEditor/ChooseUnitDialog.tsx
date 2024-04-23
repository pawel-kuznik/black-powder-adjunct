import { UnitDescriptor } from "../../data/units";
import { Page } from "../Page";
import { Title } from "../Title";
import { UnitPicker } from "../UnitPicker";

export interface ChooseUnitDialogProps {

    onPick: (unit: UnitDescriptor) => void;
    onClose: () => void;
};

export function ChooseUnitDialog({ onPick, onClose } : ChooseUnitDialogProps) {

    const handlePick = (unit: UnitDescriptor) => {

        onPick(unit);
        onClose();
    };

    return (
        <Page modal>
            <Title text="Choose unit"/>
            <UnitPicker onPick={handlePick}/> 
        </Page>
    );
};