import * as React from 'react';
import './_ContentPanel.scss';

interface ContentPanelProps {
  children: any;
}

const ContentPanel = (props: ContentPanelProps) => {
  const { children } = props;
  return <main id="content-panel">{children}</main>;
};

export default ContentPanel;
