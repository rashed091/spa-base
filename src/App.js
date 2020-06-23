import React from "react"; // <-- updated
import Login from "./pages/login";
// import { BrowserRouter as Router } from "react-router-dom";
// import { createBrowserHistory } from "history";
// import Routes from "./pages";
// const history = createBrowserHistory();
// class App extends React.PureComponent {
//   render() {
//     return (
//       <Router history={history}>
//         <Routes />
//       </Router>
//     );
//   }
// }

function App() {
  // const auth0 = useContext(Auth0Context); // <-- new

  return <Login />;
}
export default App;
