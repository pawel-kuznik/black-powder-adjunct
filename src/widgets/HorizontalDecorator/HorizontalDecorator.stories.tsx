import type { Meta, StoryObj } from '@storybook/react';
import { HorizontalDecorator } from '..';

const meta = {
    title: 'Widgets/HorizontalDecorator',
    component: HorizontalDecorator,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof HorizontalDecorator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};