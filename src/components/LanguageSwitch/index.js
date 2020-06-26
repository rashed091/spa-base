//@flow

import * as React from "react";
import { Toggle } from "rsuite";

class LanguageSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = (event) => {
    console.log(event);
  };

  render() {
    return (
      <div className="language-switch">
        <Toggle
          size="lg"
          checkedChildren="Bangla"
          unCheckedChildren="English"
          defaultChecked
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default LanguageSwitch;
