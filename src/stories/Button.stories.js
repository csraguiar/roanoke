import { Button } from '../components/button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    buttonText: { control: 'text' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    buttonText: 'Action',
  },
};

export const Secondary = {
  args: {
    ...Primary.args,
    primary: false,
  },
};

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
