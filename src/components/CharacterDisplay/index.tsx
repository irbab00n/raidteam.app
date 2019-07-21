import React from 'react';
import './_CharacterDisplay.scss';

interface CharacterDisplayProps {
  characterData: any;
}

const CharacterDisplay = (props: CharacterDisplayProps) => {
  const { characterData } = props;

  let characterURL = characterData.media.render_url;
  let characterStyle = {
    background: `url(${characterURL}`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '50vh',
  };

  return (
    <div id="character-display">
      <div className="cd-header-wrapper">Header</div>
      <div className="cd-character-image" style={characterStyle}></div>
    </div>
  );
};

export default CharacterDisplay;
