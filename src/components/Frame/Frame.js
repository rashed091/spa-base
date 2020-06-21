// @flow

import * as React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {
  Container,
  Sidebar,
  Sidenav,
  Icon,
  Content,
  Dropdown,
  Nav,
  DOMHelper,
} from "rsuite";

import NavToggle from "./NavToggle";
import HeaderAvatar from "../Avatar";

const { getHeight, on } = DOMHelper;
const navs = [
  {
    key: "1",
    icon: <Icon icon="dashboard" />,
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    key: "2",
    icon: <Icon icon="group" />,
    text: "Members",
    link: "/list/members",
  },
];

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: getHeight(window),
      expand: true,
    };
    this.resizeListenner = on(window, "resize", this.updateHeight);
  }

  // componentDidMount() {
  //   this.context.router.listen();
  // }

  componentWillUnmount() {
    if (this.resizeListenner) {
      this.resizeListenner.off();
    }
  }

  updateHeight = () => {
    this.setState({
      windowHeight: getHeight(window),
    });
  };

  handleToggle = () => {
    this.setState({
      expand: !this.state.expand,
    });
  };

  renderNavs() {
    return navs.map((item) => {
      if (item.children) {
        return (
          <Dropdown
            key={item.key}
            eventKey={item.key}
            placement="rightTop"
            trigger="hover"
            title="Errors"
            icon={item.icon}
          >
            {item.children.map((child) => {
              return (
                <Dropdown.Item
                  key={child.key}
                  eventKey={child.key}
                  componentClass={Link}
                  to={child.link}
                  activeClassName="nav-item-active"
                >
                  {child.text}
                </Dropdown.Item>
              );
            })}
          </Dropdown>
        );
      }

      return (
        <Nav.Item
          key={item.key}
          eventKey={item.key}
          icon={item.icon}
          componentClass={Link}
          to={item.link}
          activeClassName="nav-item-active"
        >
          {item.text}
        </Nav.Item>
      );
    });
  }

  render() {
    const { children } = this.props;
    const { expand, windowHeight } = this.state;

    const containerClasses = classNames("page-container", {
      "container-full": !expand,
    });

    let navBodyStyle = null;
    if (expand) {
      navBodyStyle = {
        height: windowHeight - 112,
        overflow: "auto",
      };
    }

    return (
      <Container className="frame">
        <Sidebar
          style={{ display: "flex", flexDirection: "column" }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div className="header-hrand">
              <Link to="/login">
                <Icon
                  icon="logo-analytics"
                  size="lg"
                  style={{ verticalAlign: 0 }}
                />
                <span style={{ marginLeft: 12 }}> RSUITE ANALYTICS</span>
              </Link>
            </div>
          </Sidenav.Header>
          <Sidenav
            expanded={expand}
            defaultOpenKeys={["3"]}
            activeKey={[]}
            appearance="subtle"
          >
            <Sidenav.Body style={navBodyStyle}>
              <Nav>
                {this.renderNavs()}
                <Nav.Item
                  href="https://github.com/rsuite/rsuite-management-system"
                  icon={<Icon icon="github" />}
                  target="_blank"
                >
                  Github
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          {/* <NavToggle expand={expand} onChange={this.handleToggle} /> */}
        </Sidebar>

        <Container className={containerClasses}>
          <HeaderAvatar />
          <Content>{children}</Content>
        </Container>
      </Container>
    );
  }
}

export default Frame;
