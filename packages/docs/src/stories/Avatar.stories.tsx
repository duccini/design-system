import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@duccini-ignite/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/duccini.png',
    alt: 'Guilherme Duccini',
  },

  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    },
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const CustomTag: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
