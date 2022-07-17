import React, { Component } from 'react';
import './ReadingComponent.css';
import TabsMain from './TabsMain';
import TopicosList from './TopicosList';
import { TopicosDataContext } from './Root';

class ReadingComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentSelectedTopico: 0
    }
  }

  updateSelectedTopico = (i) => {
    this.setState({ currentSelectedTopico: i });
  }

  render() {
    return (
      <TopicosDataContext.Consumer>
        {topicosData => (
          <div className="ReadingComponent">
            <TopicosList topicosList={topicosData.topicos} handleClick={this.updateSelectedTopico}></TopicosList>
            <div className="horizontalline"></div>
            <TabsMain
              tabsData={topicosData.topicos[ this.state.currentSelectedTopico ].tabs}
              titulo={topicosData.topicos[ this.state.currentSelectedTopico ].topicoTitle}>

            </TabsMain>
          </div>
        )}
      </TopicosDataContext.Consumer>
    );
  }

}

export default ReadingComponent;
