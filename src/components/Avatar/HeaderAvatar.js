//@flow

import * as React from "react";
import { Dropdown, Popover, Whisper, Icon, Divider } from "rsuite";

const Menu = ({ onSelect }) => (
  <Dropdown.Menu onSelect={onSelect}>
    <Dropdown.Item panel style={{ padding: 15, width: 160 }}>
      <p>Signed in as</p>
      <strong>Foobar</strong>
    </Dropdown.Item>
    <Divider />
    <Dropdown.Item>Help</Dropdown.Item>
    <Dropdown.Item>Sign out</Dropdown.Item>
  </Dropdown.Menu>
);

const MenuPopover = ({ onSelect, ...rest }) => (
  <Popover {...rest} full>
    <Menu onSelect={onSelect} />
  </Popover>
);

class HeaderAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.trigger = null;
    this.handleSelectMenu = this.handleSelectMenu.bind(this);
  }

  handleSelectMenu = (eventKey, event) => {
    if (this.trigger) {
      this.trigger.hide();
    }
  };

  render() {
    return (
      <div className="header-avatar">
        <Whisper
          placement="bottomRight"
          trigger="click"
          triggerRef={(ref) => {
            this.trigger = ref;
          }}
          speaker={<MenuPopover onSelect={this.handleSelectMenu} />}
        >
          <Icon icon="user-circle-o" size="lg" />
        </Whisper>
      </div>
    );
  }
}

export default HeaderAvatar;
