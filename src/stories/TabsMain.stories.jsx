
import TabsMain from '../components/TabsMain';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tabs/TabsMain',
  component: TabsMain,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TabsMain {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  titulo: 'TabsMain com storybook',
  tabsData: [
    {
      tabId: 'Tab 1',
      tabContent: 'Esse é o conteúdo da tab 1'
    },
    {
      tabId: 'Tab 2',
      tabContent: 'Esse é o conteúdo da tab número 2'
    },
    {
      tabId: 'Tab 3',
      tabContent: 'Terceiro conteúdo'
    },
    {
      tabId: 'Tab 4',
      tabContent: 'Quarta página'
    }
  ],
};
