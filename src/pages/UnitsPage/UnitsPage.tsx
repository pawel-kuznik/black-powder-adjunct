import { useState } from "react";
import { UnitDescriptor } from "../../data/units";
import { Page, UnitEditor, UnitPicker } from "../../widgets";

export function UnitsPage() {
    const [ editing, setEditing ] = useState<UnitDescriptor|undefined>(undefined);

    const handlePick = (unit: UnitDescriptor) => {
  
      setEditing(unit);
    };
    
    return (
        <Page>
          <UnitEditor model={editing}/>
          <UnitPicker onPick={handlePick}/>
        </Page>
      );
};