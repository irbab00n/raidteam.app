import * as React from 'react';
import './_FeatureSidebar.scss';

interface FeatureConfig {
  name: String;
  icon: any;
}

interface FeatureSidebarProps {
  features: FeatureConfig[];
}

const FeatureSidebar = (props: FeatureSidebarProps) => {
  const { features } = props;

  return (
    <aside id="feature-sidebar">
      <ul>
        {features.map((feature, index) => {
          return <li key={`feature-${feature.name}-${index}`}>{feature.icon}</li>;
        })}
      </ul>
    </aside>
  );
};

export default FeatureSidebar;
