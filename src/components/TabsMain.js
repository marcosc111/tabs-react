import React, { Component } from 'react';
import './TabsMain.css';
import TabsOption from './TabsOption';
import TabsContent from './TabsContent';

class TabsMain extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentSelectedTab: this.props.currentSelected ? this.props.currentSelected : 0
    }
  }

  render() {
    return (
      <div className="TabsMain">
        <h1 className="titulo">{this.props.titulo}</h1>
        {this.props.tabsData.map((tab, index) =>
          <span key={tab.tabId} >
            <TabsOption onCustomClick={ () => this.handleClickTabOption(index) } selecionado={ this.state.currentSelectedTab === index } tabId={tab.tabId}></TabsOption>
          </span>
        )}
        <TabsContent conteudo={this.props.tabsData[this.state.currentSelectedTab].tabContent}></TabsContent>
      </div>
    );
  }

  handleClickTabOption(i) {
    this.setState({ currentSelectedTab: i })
  }

}

export default TabsMain;
