import { Story, Meta } from '@storybook/react'
import { FooterIcon, FooterIconProps } from './FooterIcon'

export default {
  component: FooterIcon,
  title: 'FooterIcon',
} as Meta

const Template: Story<FooterIconProps> = (args) => <FooterIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
