import React, { lazy, Suspense, useState } from 'react';
import { Router, Route, Switch } from 'react-router';
import { isMobile } from 'react-device-detect';
import { createBrowserHistory } from 'history';
import './_App.scss';

import ContentPanel from './components/ContentPanel';
import { RectangleGradientLoader } from './components/Loaders';
// import { PrimaryButton } from './components/Buttons';

import navLogo from './assets/raidteam-logo-small.png';

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
  // Character page data
  // TODO:  Instead of storing individual character data on the app level to prevent loss of data when the user navigates the page, instead we should look into storing a list of all the searches that the user has performed, and any time that they navigate back to the character page, it will retrieve the data for the last searched character
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
          left={<NavBrand title={<img src={navLogo} alt="" />} link="/" />}
          right={<i className="fa fa-user"></i>}
        />
      </Suspense>
      <Suspense
        fallback={
          isMobile ? (
            <RectangleGradientLoader height="60px" width="100%" position="fixed" />
          ) : (
            <RectangleGradientLoader height="calc(100vh - 60px)" width="60px" position="fixed" />
          )
        }
      >
        <FeatureSidebar features={features} isMobile={isMobile} />
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
