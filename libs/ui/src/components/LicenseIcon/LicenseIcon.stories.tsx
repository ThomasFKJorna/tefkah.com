import { Story, Meta } from '@storybook/react'
import { LicenseIcon, LicenseIconProps } from './LicenseIcon'

export default {
  component: LicenseIcon,
  title: 'LicenseIcon',
} as Meta

const Template: Story<LicenseIconProps> = (args) => <LicenseIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
