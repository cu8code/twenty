import type { Meta, StoryObj } from '@storybook/react';

import { ComponentDecorator } from '~/testing/decorators';

import {
  BoardColumnEditTitleMenu,
  COLOR_OPTIONS,
} from '../BoardColumnEditTitleMenu';

const meta: Meta<typeof BoardColumnEditTitleMenu> = {
  title: 'UI/Board/BoardColumnMenu',
  component: BoardColumnEditTitleMenu,
  decorators: [ComponentDecorator],
  argTypes: {
    color: {
      control: 'select',
      options: COLOR_OPTIONS.map(({ id }) => id),
    },
  },
  args: { color: 'green', title: 'Column title' },
};

export default meta;
type Story = StoryObj<typeof BoardColumnEditTitleMenu>;

export const AllTags: Story = {};