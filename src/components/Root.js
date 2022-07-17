import React, { Component } from 'react';
import './Root.css';
import WritingComponent from './WritingComponent';
import ReadingComponent from './ReadingComponent';

export const TopicosDataContext = React.createContext();

class Root extends Component {

  constructor(props) {
    super(props)

    // alguns topicos iniciais pra facilitar a visualização

    this.state = {
      topicos:
      [
        {
          topicoTitle: 'Primeiro exemplo',
          tabs:
          [
            { tabId: "Tab 1", tabContent: "Esse é o conteúdo da tab 1" },
            { tabId: "Tab 2", tabContent: "Esse é o conteúdo da tab número 2" },
            { tabId: "Tab 3", tabContent: "Terceiro conteúdo" },
            { tabId: "Tab 4", tabContent: "Quarta página" }
          ]
        },
        {
          topicoTitle: 'Outro exemplo',
          tabs:
          [
            { tabId: "t1", tabContent: "this is the content related to tab 1" },
            { tabId: "t2", tabContent: "this is the content related to tab 2" },
            { tabId: "t3", tabContent: "this is the content related to tab 3" },
            { tabId: "t4", tabContent: "this is the content related to tab 4" }
          ]
        }
      ],
      currentSelectedTopico: 0
    }
  }

  cadastraNovoTopico = (topico) => {
    let newTopicos = [...this.state.topicos];
    newTopicos.push(topico);
    this.setState({ topicos: newTopicos });
  }

  render() {
    return (
      <div className="Root">
        <TopicosDataContext.Provider value={this.state}>
          <WritingComponent handleCadastro={this.cadastraNovoTopico} ></WritingComponent>
          <div className="line"></div>
          <ReadingComponent></ReadingComponent>
        </TopicosDataContext.Provider>
      </div>
    );
  }

}

export default Root;
