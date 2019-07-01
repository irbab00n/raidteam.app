import * as React from 'react';
import './_App.scss';

import { RectangleGradientLoader } from './components/Loaders';

const { lazy, Suspense } = React;
const Navigation = lazy(() => import('./components/Navigation'));
const NavBrand = lazy(() => import('./components/Navigation/NavBrand'));

const App = () => (
  <div className="App">
    <Suspense fallback={<RectangleGradientLoader height="60px"/>}>
      <Navigation
        brand={<NavBrand title='Navigation' link="/"/>}
        links={null}
      />
    </Suspense>
  </div>
);

export default App;
