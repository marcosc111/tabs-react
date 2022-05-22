import React, { Component } from "react";
import TabsMain from "./components/TabsMain";
import "./App.css";

class App extends Component {
  
  data = [
    { tabId: "Tab 1", tabContent: "Esse é o conteúdo da tab 1" },
    { tabId: "Tab 2", tabContent: "Esse é o conteúdo da tab número 2" },
    { tabId: "Tab 3", tabContent: "Terceiro conteúdo" },
    { tabId: "Tab 4", tabContent: "Quarta página" },
  ];

  render() {
    return (
      <div className="App">
        <TabsMain tabsData={this.data} titulo="Tabs com REACT"></TabsMain>
      </div>
    );
  }
}

export default App;
