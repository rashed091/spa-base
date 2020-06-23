import React from "react"; // <-- updated
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./pages";

const history = createBrowserHistory();
class App extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    );
  }
}

export default App;
