import React, { useContext } from "react";
import { Container, Icon, Panel, IconButton } from "rsuite";
import { Auth0Context } from "../../auth0/auth0-context"; // <-- new

const Login = () => {
  const auth0 = useContext(Auth0Context); // <-- new

  return (
    <Container className="login-page">
      <Panel header="Please Click on Login" bordered className="content-center">
        <IconButton
          appearance="subtle"
          icon={<Icon className="fill-color" icon="home" size="lg" />}
          size="lg"
          onClick={auth0.loginWithRedirect}
        >
          Login
        </IconButton>
      </Panel>
    </Container>
  );
};

export default Login;
