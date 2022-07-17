import React, { Component } from 'react';
import './WritingComponent.css';
import FormErrors from './FormErrors';

class WritingComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      newTopicoTitle: '',
      newTopicoTitleValid: true,
      numberOfTabs: 2,
      newTabs: [
        {
          newTabTitle: '',
          newTabContent: '',
          titleValid: true,
          contentValid: true,
          titleErrorMsg: '',
          contentErrorMsg: ''
        },
        {
          newTabTitle: '',
          newTabContent: '',
          titleValid: true,
          contentValid: true,
          titleErrorMsg: '',
          contentErrorMsg: ''
        },
        {
          newTabTitle: '',
          newTabContent: '',
          titleValid: true,
          contentValid: true,
          titleErrorMsg: '',
          contentErrorMsg: ''
        },
        {
          newTabTitle: '',
          newTabContent: '',
          titleValid: true,
          contentValid: true,
          titleErrorMsg: '',
          contentErrorMsg: ''
        }
      ],
      formErrorsMsgs: {},
    }
  }

  validateInput = (text, i, isTitle, isTopicoTitle) => {

    let msgDeErro = "";

    if (isTopicoTitle) {
      msgDeErro += "Título do novo tópico";
    } else {
      if (isTitle) {
        msgDeErro += "Título do tab " + (i+1);
      } else {
        msgDeErro += "Conteúdo do tab " + (i+1);
      }
    }

    if (text.length == 0) {
      msgDeErro += " vazio!";
      return msgDeErro;
    }

    if (text.length < 4) {
      msgDeErro += " muito curto!";
      return msgDeErro;
    }
  }

  changeSelect = (event) => {
    this.setState({ numberOfTabs: parseInt(event.target.value) })
  }

  cadastrar = (event) => {

    // itera pelos campos
    for(let i = 0 ; i < this.state.numberOfTabs ; ++i) {
      let o = this.state.newTabs[i];
      this.onInputFocusOutHandler(o.newTabTitle, i, true);
      this.onInputFocusOutHandler(o.newTabContent, i, false);
    }

    this.onTabCollectionTitleFocusOutHandler(this.state.newTopicoTitle);

    // verifica se tem erros
    if (Object.keys(this.state.formErrorsMsgs).length > 0)
      return;

    let novoTopico = { topicoTitle: this.state.newTopicoTitle, tabs: [] }
    for ( let i = 0 ; i < this.state.numberOfTabs ; ++i ) {
      novoTopico.tabs.push( {
        tabId: this.state.newTabs[i].newTabTitle,
        tabContent: this.state.newTabs[i].newTabContent
      });
    }
    
    this.props.handleCadastro(novoTopico);
  }

  onInputFocusOut = (event, index, isTabTitle) => {
    this.onInputFocusOutHandler(event.target.value, index, isTabTitle);
  }

  onInputFocusOutHandler = (text, index, isTabTitle) => {

    let newFormErrorMsgs = Object.assign(this.state.formErrorsMsgs);

    let newTabs = [...this.state.newTabs];
    let newTab = {...newTabs[index]};

    let errorMsgId = isTabTitle ? "title" : "content";
    errorMsgId += index;
    
    let errorMsg = this.validateInput(text, index, isTabTitle);
    if (errorMsg) {
      
      newFormErrorMsgs[errorMsgId] = errorMsg;

      if (isTabTitle)
        newTab.titleValid = false;
      else
        newTab.contentValid = false;
    } else {
      delete newFormErrorMsgs[errorMsgId];
      if (isTabTitle)
        newTab.titleValid = true;
      else
        newTab.contentValid = true;
    }

    if (isTabTitle)
      newTab.newTabTitle = text;
    else
      newTab.newTabContent = text;
    newTabs[index] = newTab;
    this.setState({ newTabs: newTabs, formErrorsMsgs: newFormErrorMsgs, freshForm: false });
  }

  onTabCollectionTitleFocusOut = (event) => {
    this.onTabCollectionTitleFocusOutHandler(event.target.value);
  }

  onTabCollectionTitleFocusOutHandler = (text) => {
    
    let errorMsg = this.validateInput(text, null, null, true);
    let newTopicoTitleValid = true;

    let newFormErrorMsgs = Object.assign(this.state.formErrorsMsgs);
    let errorMsgId = "topicoTitle";

    if (errorMsg) {
      newTopicoTitleValid = false;
      newFormErrorMsgs[errorMsgId] = errorMsg;
    } else {
      newTopicoTitleValid = true;
      delete newFormErrorMsgs[errorMsgId];
    }

    this.setState({ newTopicoTitle: text, newTopicoTitleValid: newTopicoTitleValid });
  }

  render() {
    return (
      
        <div className="WritingComponent">
          <p>Cadastro de novo tópico</p>
          <form>
            <input
              type="text" 
              className="inputTitulo"
              placeholder="Título"
              onBlur={this.onTabCollectionTitleFocusOut}
              ></input>
            <br />
            <span className="simple_span_select">Número de tabs:</span>
            <select className="selectNumber" onChange={this.changeSelect} name="select">
              {
                [2,3,4].map((n) => (
                  <option key={`select_option_${n}`} value={n}>{n}</option>
                ))
              }
            </select>
            {
              Array.from(Array( this.state.numberOfTabs )).map((obj, index) => (
                <div key={`new_tab_div_${index}`} className="new_tab_div">
                  <input
                    onBlur={event => this.onInputFocusOut(event, index, true)}
                    type="text"
                    id={`new_tab_title_${index}`}
                    className="new_tab_div"
                    placeholder={`Título do tab ${index+1}`}
                    defaultValue={this.state.newTabs[index].newTabTitle}>
                  </input>
                  <input
                    onBlur={event => this.onInputFocusOut(event, index, false)}
                    type="text"
                    id={`new_tab_content_${index}`}
                    className="new_tab_div"
                    placeholder={`Conteúdo do tab ${index+1}`}
                    defaultValue={this.state.newTabs[index].newTabContent}>
                  </input>
              </div>
              ))
            }
            <FormErrors errorData={this.state.formErrorsMsgs}></FormErrors>
            <div
              className={
                Object.keys(this.state.formErrorsMsgs).length > 0
                ? "button_cadastro button_disabled"
                : "button_cadastro" }
              onClick={this.cadastrar}>Cadastrar tópico
            </div>
          </form>
        </div>
    );
  }

}

export default WritingComponent;
