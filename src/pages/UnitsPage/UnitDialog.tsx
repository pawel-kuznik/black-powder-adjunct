import { UnitDescriptor } from "../../data/units";
import { useUnitDescriptorsStore } from "../../state";
import { Page, Title, UnitEditor } from "../../widgets";

export interface UnitDialogProps {

    unit: UnitDescriptor;
    onSubmit?: (unit: UnitDescriptor) => void;
    onClose?: () => void;
};

export function UnitDialog({ unit, onSubmit, onClose } : UnitDialogProps) {

    const unitDescriptorStore = useUnitDescriptorsStore();

    const handleSubmit = (unit: UnitDescriptor) => {

        unitDescriptorStore.store(unit);

        onSubmit?.(unit);
        onClose?.();
    };

    const handleCancel = () => {

        onClose?.();
    };

    return (
        <Page modal>
            <Title text="Compose unit"/>
            <UnitEditor unit={unit} onSubmit={handleSubmit} onCancel={handleCancel} />
        </Page>
    );
};