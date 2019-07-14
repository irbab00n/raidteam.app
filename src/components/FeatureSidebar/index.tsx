import * as React from 'react';
import './_FeatureSidebar.scss';

import Link from '../Link';

interface FeatureConfig {
  name: string;
  endpoint: string;
  icon: any;
}

interface FeatureSidebarProps {
  features: FeatureConfig[];
}

const { useState } = React;

const findIndexOfCurrentEndpoint = (pathname, features) => {
  console.log('pathname to test: ', pathname);
  console.log('features to test: ', features);
  let currentIndex = 0;
  for (currentIndex; currentIndex < features.length; currentIndex++) {
    console.log('looking at endpoint: ', features[currentIndex].endpoint);
    if (pathname.includes(features[currentIndex].endpoint)) {
      break;
    }
  }
  console.log('current index: ', currentIndex);
  return currentIndex;
};

const FeatureSidebar = (props: FeatureSidebarProps) => {
  const { features = [] } = props;
  const [currentEndpoint, setCurrentEndpoint] = useState(
    findIndexOfCurrentEndpoint(window.location.pathname, features)
  );

  return (
    <aside id="feature-sidebar">
      <ul>
        {features.map((feature, index) => {
          return (
            <li
              key={`feature-${feature.name}-${index}`}
              onClick={() => setCurrentEndpoint(index)}
              className={currentEndpoint === index ? 'selected' : ''}
            >
              <Link href={feature.endpoint} className="feature-link" useReactRouter>
                <label title={feature.name}>{feature.icon}</label>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default FeatureSidebar;
