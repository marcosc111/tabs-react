import React, { Component } from 'react';
import './FormErrors.css';

class FormErrors extends Component {

  constructor(props) {
    super(props)


  }

  render() {
    return (
      Object.keys(this.props.errorData).length > 0
      ?
        <div className="FormErrors">
          <div className="ErrorListWrapper">
            <ul>
            {
              Object.values(this.props.errorData).map((e, i) => (
                <li key={i} >{e}</li>
              ))
            }
            </ul>
          </div>
        </div>
      : 
        <div></div>
    );
  }

}

export default FormErrors;
