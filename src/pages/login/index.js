import React from "react";
import { Container, Icon, Panel, IconButton } from "rsuite";
import { useAuth0 } from "../../auth0/auth0-hook"; // <-- new

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container className="login-page">
      <Panel header="Please Click on Login" bordered className="content-center">
        <IconButton
          appearance="subtle"
          icon={<Icon className="fill-color" icon="home" size="lg" />}
          size="lg"
          onClick={() => loginWithRedirect({})}
        >
          Login
        </IconButton>
      </Panel>
    </Container>
  );
};

export default Login;
