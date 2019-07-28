import React from 'react';
import './_WarcraftLogs.scss';

import DisplayContainer from '../DisplayContainer';
import DisplayHeader from '../DisplayHeader';

interface WarcraftLogsProps {
  characterData?: any;
}

const WarcraftLogs = (props: WarcraftLogsProps) => {
  return (
    <DisplayContainer>
      <DisplayHeader className="blue">
        <h4>Warcraft Logs Data</h4>
      </DisplayHeader>
    </DisplayContainer>
  );
};

export default WarcraftLogs;
