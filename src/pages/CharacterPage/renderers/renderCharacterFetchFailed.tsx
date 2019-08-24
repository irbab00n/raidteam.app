import React from 'react';

const renderCharacterFetchFailed = (failedMessage: string) => (
  <div className="cp_no-character-prompt">
    <div>{failedMessage}</div>
  </div>
);

export default renderCharacterFetchFailed;
