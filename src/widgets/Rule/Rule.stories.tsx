import type { Meta, StoryObj } from '@storybook/react';
import { Rule } from '../../widgets';

const meta = {
    title: 'Widgets/Rule',
    component: Rule,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Rule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DetachedLightCompanies: Story = {
    args: {
        rule: "detached-ligh-companies"
    },
};
