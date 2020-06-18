import React from "react";
import { Container, Icon, Panel, IconButton } from "rsuite";

const Login = () => {
  return (
    <Container className="login-page">
      <Panel header="Please Click on Login" bordered className="content-center">
        <IconButton
          appearance="subtle"
          icon={<Icon className="fill-color" icon="home" size="lg" />}
          size="lg"
        >
          Login
        </IconButton>
      </Panel>
    </Container>
  );
};

export default Login;
