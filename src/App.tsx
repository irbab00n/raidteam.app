import * as React from 'react';
import * as ReactRouter from 'react-router';
import * as history from 'history';
import './_App.scss';

import ContentPanel from './components/ContentPanel';
import { RectangleGradientLoader } from './components/Loaders';
// import { PrimaryButton } from './components/Buttons';

const { lazy, Suspense } = React;
const { Router, Route, Switch } = ReactRouter;
const { createBrowserHistory } = history;
const Navigation = lazy(() => import('./components/Navigation'));
const NavBrand = lazy(() => import('./components/Navigation/NavBrand'));
// const PrimaryButton = lazy(() => import('./components/Buttons/PrimaryButton'));
// const SecondaryButton = lazy(() => import('./components/Buttons/SecondaryButton'));
const FeatureSidebar = lazy(() => import('./components/FeatureSidebar'));

const appHistory = createBrowserHistory();

const App = () => {
  const features = [
    {
      name: 'Character',
      icon: <i className="fas fa-user"></i>,
    },
    {
      name: 'Guild',
      icon: <i className="fas fa-users"></i>,
    },
    {
      name: 'Raid Team',
      icon: <i className="fas fa-users"></i>,
    },
  ];

  return (
    <Router history={appHistory}>
      <Suspense fallback={<RectangleGradientLoader height="60px" />}>
        <Navigation brand={<NavBrand title="RaidTeam" link="/" />} links={null} />
      </Suspense>
      <Suspense fallback={<RectangleGradientLoader height="calc(100vh - 60px)" width="60px" />}>
        <FeatureSidebar features={features} />
      </Suspense>
      <ContentPanel>
        <Switch>
          <Route exact path="/" render={() => <div className="content-panel">Main Panel</div>} />
        </Switch>
      </ContentPanel>
    </Router>
  );
};

export default App;
