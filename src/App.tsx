import * as React from 'react';
import * as ReactRouter from 'react-router';
import * as history from 'history';
import './_App.scss';

import ContentPanel from './components/ContentPanel';
import { RectangleGradientLoader } from './components/Loaders';
// import { PrimaryButton } from './components/Buttons';

const { lazy, Suspense, useEffect } = React;
const { Router, Route, Switch } = ReactRouter;
const { createBrowserHistory } = history;

// COMPONENTS
const Navigation = lazy(() => import('./components/Navigation'));
const NavBrand = lazy(() => import('./components/Navigation/NavBrand'));
const FeatureSidebar = lazy(() => import('./components/FeatureSidebar'));

// PAGES
const CharacterPage = lazy(() => import('./pages/CharacterPage'));
const GuildPage = lazy(() => import('./pages/GuildPage'));
const RaidPage = lazy(() => import('./pages/RaidPage'));

export const appHistory = createBrowserHistory();

const App = () => {
  const features = [
    {
      name: 'Character',
      endpoint: '/character',
      icon: <i className="fas fa-user"></i>,
    },
    {
      name: 'Guild',
      endpoint: '/guild',
      icon: <i className="fas fa-users"></i>,
    },
    {
      name: 'Raid Team',
      endpoint: '/raid',
      icon: <i className="fas fa-chart-pie"></i>,
    },
  ];

  return (
    <Router history={appHistory}>
      <Suspense fallback={<RectangleGradientLoader height="60px" />}>
        <Navigation
          left={<NavBrand title="RaidTeam" link="/" />}
          right={<i className="fa fa-user"></i>}
        />
      </Suspense>
      <Suspense fallback={<RectangleGradientLoader height="calc(100vh - 60px)" width="60px" />}>
        <FeatureSidebar features={features} />
      </Suspense>
      <ContentPanel>
        <Switch>
          <Route
            exact
            path="/"
            render={({ match }) => {
              console.log('match: ', match);
              return <div className="content-panel">Main Panel</div>;
            }}
          />
          <Route
            path="/character"
            render={({ match }) => (
              <Suspense fallback={<div>Loading</div>}>
                <CharacterPage match={match} />
              </Suspense>
            )}
          />
          <Route
            path="/guild"
            render={({ match }) => (
              <Suspense fallback={<div>Loading</div>}>
                <GuildPage match={match} />
              </Suspense>
            )}
          />
          <Route
            path="/raid"
            render={({ match }) => (
              <Suspense fallback={<div>Loading</div>}>
                <RaidPage match={match} />
              </Suspense>
            )}
          />
        </Switch>
      </ContentPanel>
    </Router>
  );
};

export default App;
