import type { Meta, StoryObj } from '@storybook/react';
import { Flag } from '../../widgets';

const meta = {
    title: 'Widgets/Flag',
    component: Flag,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Flag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const British: Story = {
    args: {
        which: "british"
    },
};

export const French: Story = {
    args: {
        which: "french"
    },
};

export const Prussian: Story = {
    args: {
        which: "prussian"
    }
};

export const Unknown: Story = {
    args: {
        which: "gibberish"
    }
};
