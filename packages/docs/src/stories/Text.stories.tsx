import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@duccini-ignite/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, saepe neque non aut libero harum quisquam! Ex obcaecati animi, nulla atque voluptatem molestiae exercitationem dolores, corporis non incidunt sapiente illum.',
    size: 'md'  
  },

  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '6xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
