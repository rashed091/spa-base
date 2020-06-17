import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { IntlProvider } from 'react-intl';
import { IntlProvider as RSIntlProvider } from 'rsuite';

import enGB from 'rsuite/lib/IntlProvider/locales/en_GB';
import locales from './locales';
import Routes from './pages';

const history = createBrowserHistory();

class App extends React.PureComponent {
  render() {
    return (
      <IntlProvider locale="en" messages={locales.en}>
        <RSIntlProvider locale={enGB}>
          <Router history={history}>
            <Routes />
          </Router>
        </RSIntlProvider>
      </IntlProvider>
    );
  }
}

export default App;
