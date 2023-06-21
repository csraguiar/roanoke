import Card from '../components/card';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: { 
    heading: { control: 'text' },
    description: { control: 'text' },
    buttonText: { control: 'text' },
    footnote: { control: 'text' },
    featured: { control: 'boolean' }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Bronze = {
  args: {
    heading: 'Card heading',
    description: 'A small paragraph usually taking up to two lines.',
    buttonText: 'Action',
    footnote: 'A footnote might come handy.',
    featured: false,
  },
};

export const Featured = {
  args: {
    ...Bronze.args,
  featured: true,
  },
};
