import React, { Component } from 'react';
import './TabsContent.css';

class TabsContent extends Component {
  render() {
    return (
      <div className="TabsContent">
        {this.props.conteudo}
      </div>
    );
  }
}

export default TabsContent;
