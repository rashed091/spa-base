import * as React from "react";
import classNames from "classnames";
import {
  Container,
  Header,
  Content,
  Sidebar,
  Nav,
  Sidenav,
  Navbar,
  Dropdown,
  Icon,
  DOMHelper,
} from "rsuite";
import HeaderAvatar from "../../components/Avatar";

const { getHeight, on } = DOMHelper;

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 56, textAlign: "center" }}>
          <Icon icon={expand ? "angle-left" : "angle-right"} />
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true,
      windowHeight: getHeight(window),
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.resizeListenner = on(window, "resize", this.updateHeight);
  }

  handleToggle() {
    this.setState({
      expand: !this.state.expand,
    });
  }

  updateHeight = () => {
    this.setState({
      windowHeight: getHeight(window),
    });
  };

  render() {
    const { expand, windowHeight } = this.state;
    const containerClasses = classNames("page-container", {
      "container-full": !expand,
    });
    let navBodyStyle = null;
    if (expand) {
      navBodyStyle = {
        height: windowHeight - 60,
        overflow: "auto",
      };
    }

    return (
      <Container className="landing-page">
        <Sidebar
          style={{ display: "flex", flexDirection: "column" }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav
            expanded={expand}
            defaultOpenKeys={["1"]}
            appearance="subtle"
            activeKey={["1"]}
          >
            <Sidenav.Body style={navBodyStyle}>
              <Nav justified>
                <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                  Dashboard
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                  User Group
                </Nav.Item>
                <Dropdown
                  eventKey="3"
                  trigger="hover"
                  title="Advanced"
                  icon={<Icon icon="magic" />}
                  placement="rightStart"
                >
                  <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                  <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                  <Dropdown.Item eventKey="3-3">Brand</Dropdown.Item>
                  <Dropdown.Item eventKey="3-4">Loyalty</Dropdown.Item>
                  <Dropdown.Item eventKey="3-5">Visit Depth</Dropdown.Item>
                </Dropdown>
                <Dropdown
                  eventKey="4"
                  trigger="hover"
                  title="Settings"
                  icon={<Icon icon="gear-circle" />}
                  placement="rightStart"
                >
                  <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                  <Dropdown.Item eventKey="4-2">Websites</Dropdown.Item>
                  <Dropdown.Item eventKey="4-3">Channels</Dropdown.Item>
                  <Dropdown.Item eventKey="4-4">Tags</Dropdown.Item>
                  <Dropdown.Item eventKey="4-5">Versions</Dropdown.Item>
                </Dropdown>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={this.handleToggle} />
        </Sidebar>

        <Container className={containerClasses}>
          <HeaderAvatar />
          <Header>
            <h2>Page Title</h2>
          </Header>
          <Content>Content</Content>
        </Container>
      </Container>
    );
  }
}

export default LandingPage;
