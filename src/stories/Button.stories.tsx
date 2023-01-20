import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Button } from 'components';
import Icon from 'components/Icon';
import Spinner from 'components/Spinner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = () => <Button>Button</Button>;

export const FullWidth = () => <Button fullWidth>Button</Button>;

export const LoadingState = () => <Button loading >Button</Button>;

export const DisabledState = () => <Button disabled>Button</Button>;

export const WithIconPreffix = () => <Button icon={ <Icon icon='airplane' /> } >Button</Button>;

export const WithIconSuffix = () => <Button iconSuffix={ <Icon icon='airplane' /> } >Button</Button>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };