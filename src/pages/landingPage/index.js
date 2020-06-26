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
  Icon,
  DOMHelper,
} from "rsuite";
import LanguageSwitch from "../../components/LanguageSwitch";

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
      expand: false,
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
                <Nav.Item eventKey="1" active icon={<Icon icon="trend" />}>
                  Dashboard
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<Icon icon="industry" />}>
                  Inventory
                </Nav.Item>
                <Nav.Item eventKey="3" icon={<Icon icon="sales" />}>
                  Sales
                </Nav.Item>
                <Nav.Item eventKey="4" icon={<Icon icon="shopping-cart" />}>
                  Purchases
                </Nav.Item>
                <Nav.Item eventKey="5" icon={<Icon icon="money" />}>
                  Payrolls
                </Nav.Item>
                <Nav.Item eventKey="6" icon={<Icon icon="try" />}>
                  Expense
                </Nav.Item>
                <Nav.Item eventKey="7" icon={<Icon icon="bank" />}>
                  Banking
                </Nav.Item>
                <Nav.Item eventKey="7" icon={<Icon icon="file-text" />}>
                  Invoice
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={this.handleToggle} />
        </Sidebar>

        <Container className={containerClasses}>
          <LanguageSwitch />
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
