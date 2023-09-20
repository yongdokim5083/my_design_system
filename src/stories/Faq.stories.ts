import type { Meta, StoryObj } from '@storybook/react';
import { Faq } from './Faq';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Faq',
  component: Faq,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof Faq>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Faq1: Story = {
  args: {
    ttl: '사용자를 고려한 설계로 만족스러운 체험을',
    txt: '웹사이트 설계는 ... 만족감을 높입니다.웹사이트 설계는 ... 만족감을 높입니다.웹사이트 설계는 ... 만족감을 높입니다.웹사이트 설계는 ... 만족감을 높입니다.웹사이트 설계는 ... 만족감을 높입니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.우리는 ... 제공합니다.'
  }
};
