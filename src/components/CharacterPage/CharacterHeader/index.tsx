import * as React from 'react';
import './_CharacterHeader.scss';

interface CharacterHeaderProps {
  left: any;
  right: any;
}

const CharacterHeader = (props: CharacterHeaderProps) => {
  const { left, right } = props;

  return (
    <header id="character-header">
      <div className="ch_container left">{left}</div>
      <div className="ch_container right">{right}</div>
    </header>
  );
};

export default CharacterHeader;
