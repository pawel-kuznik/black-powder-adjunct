import type { Meta, StoryObj } from '@storybook/react';
import { TooltipAnchor } from './TooltipAnchor';
import { Tooltip, TooltipProps } from '..';

interface TestTooltipProps extends TooltipProps { };

function TestTooltip(props: TestTooltipProps) {

    return (
        <Tooltip {...props}>
            Interesting content tooltip
            <div><TooltipAnchor tooltip={TestTooltip}>More interesting content</TooltipAnchor></div>
        </Tooltip>
    );
};

interface TooltipTestProps { };

function TooltipTest({ } : TooltipTestProps) {
    return (
        <div>
            <TooltipAnchor tooltip={TestTooltip}>Interesting content</TooltipAnchor>
        </div>
    );
};

const meta = {
    title: 'Widgets/Tooltip',
    component: TooltipTest,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TooltipTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
        
    },
};
