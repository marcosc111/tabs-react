
import TabsOption from '../components/TabsOption';

export default {
  title: 'Tabs/TabsOption',
  component: TabsOption,
  argTypes: {
    onCustomClick: { action: "handleClick" }
  },
};

const Template = (args) => <TabsOption {...args} />;

export const Default = Template.bind({});
Default.args = {
  selecionado: false,
  tabId: "default"
};

export const TextoGrande = Template.bind({});
TextoGrande.args = {
  selecionado: false,
  tabId: "texto muito maior do que o default"
};

export const SemTexto = Template.bind({});
SemTexto.args = {
  selecionado: false,
  tabId: ""
};
