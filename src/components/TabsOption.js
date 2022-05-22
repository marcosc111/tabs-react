import React, { Component } from 'react';
import './TabsOption.css';

class TabsOption extends Component {

  render() {
    return (
      this.props.selecionado ?
        <div onClick={this.props.onCustomClick} onMouseOver={this.props.onDifferentEvent} className="opcao selecionado">
          <span><b> {this.props.tabId} </b></span>
        </div>
      :
        <div onClick={this.props.onCustomClick} className="opcao">
          <span><b> {this.props.tabId} </b></span>
        </div>
    );
  }
}

export default TabsOption;
