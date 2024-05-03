import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { UnitDescriptor } from "../../data/units";
import { useUnitDescriptorsStore } from "../../state";
import { CardsList } from "../CardsList";
import { UnitItem } from "./UnitItem";
import { filterUnits } from "../../logic";

import "./UnitPicker.css";

export interface UnitPickerProps {

    onPick?: (model: UnitDescriptor) => void;
    onRemove?: (model: UnitDescriptor) => void;
};

export function UnitPicker({ onPick, onRemove } : UnitPickerProps) {

    const { t } = useTranslation();
    const [ keyword, setKeyword ] = useState<string>("");

    const unitDescriptorStore = useUnitDescriptorsStore();
    const descriptors = filterUnits(Object.values(unitDescriptorStore.descriptors), keyword);

    const handleFilterChange = (event: ChangeEvent) => {

        setKeyword((event.target as HTMLInputElement).value);
    };

    return (
        <div>
            <div className="unitpicker-filter">
                <input type="search" placeholder={String(t("unitpicker.filter.placeholder"))} onChange={handleFilterChange}/>
            </div>
            <CardsList>
                {descriptors.map(u => (<UnitItem key={u.id} unit={u} onPick={onPick} onRemove={onRemove}/>))}
            </CardsList>
        </div>
    );
}
