
import TabsMain from '../components/TabsMain';

export default {
  title: 'Tabs/TabsMain',
  component: TabsMain,
  argTypes: {
    
  },
};

const Template = (args) => <TabsMain {...args} />;

export const DuasOpcoes = Template.bind({});
DuasOpcoes.args = {
  titulo: 'Duas opções',
  tabsData: [
    {
      tabId: 'Tab 1',
      tabContent: 'Esse é o conteúdo da tab 1'
    },
    {
      tabId: 'Tab 2',
      tabContent: 'Esse é o conteúdo da tab número 2'
    },
  ],
};

export const TresOpcoes = Template.bind({});
TresOpcoes.args = {
  titulo: 'Três opções',
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
  ],
};

export const QuatroOpcoes = Template.bind({});
QuatroOpcoes.args = {
  titulo: 'Quatro opções',
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
