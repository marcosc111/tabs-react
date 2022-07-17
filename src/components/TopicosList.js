import React, { Component } from 'react';
import './TopicosList.css';
import { TopicosDataContext } from './Root';

class TopicosList extends Component {

  constructor(props) {
    super(props)

  }

  topicoButtonClick = (i) => {
    this.props.handleClick(i);
  }

  render() {
    return (
        <div className="List">
          <h3>Lista de tópicos cadastrados</h3>
          {
            this.props.topicosList.map((topico, index) =>
              <button key={`topico_button_${index}`} onClick={() => this.topicoButtonClick(index)} className="button_list">{topico.topicoTitle}</button>
            )
          }
        </div>
    );
  }

}

export default TopicosList;
