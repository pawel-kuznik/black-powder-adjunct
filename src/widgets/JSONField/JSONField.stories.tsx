import type { Meta, StoryObj } from '@storybook/react';
import { JSONField } from '../../widgets';

const meta = {
    title: 'Widgets/JSONField',
    component: JSONField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof JSONField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Field label"
    },
};
