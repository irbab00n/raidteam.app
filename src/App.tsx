import * as React from 'react';
import './_App.scss';

import { RectangleGradientLoader } from './components/Loaders';
// import { PrimaryButton } from './components/Buttons';

const { lazy, Suspense } = React;
const Navigation = lazy(() => import('./components/Navigation'));
const NavBrand = lazy(() => import('./components/Navigation/NavBrand'));
const PrimaryButton = lazy(() => import('./components/Buttons/PrimaryButton'));
const SecondaryButton = lazy(() =>
  import('./components/Buttons/SecondaryButton')
);

const App = () => (
  <div className="App">
    <Suspense fallback={<RectangleGradientLoader height="60px" />}>
      <Navigation
        brand={<NavBrand title="Navigation" link="/" />}
        links={null}
      />
    </Suspense>
    <div className="content-block centered">
      <Suspense
        fallback={<RectangleGradientLoader height="40px" width="100px" />}
      >
        <h1>Primary Button</h1>
        <PrimaryButton>Primary Button</PrimaryButton>
      </Suspense>
    </div>
    <div className="content-block centered">
      <Suspense
        fallback={<RectangleGradientLoader height="40px" width="100px" />}
      >
        <h1>Secondary Button</h1>
        <SecondaryButton>Secondary Button</SecondaryButton>
      </Suspense>
    </div>
  </div>
);

export default App;
