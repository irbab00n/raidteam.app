import React from 'react';
import './_CharacterDisplay.scss';

interface CharacterDisplayProps {
  characterData: any;
}

const CharacterDisplay = (props: CharacterDisplayProps) => {
  const { characterData } = props;

  const locale_string = 'en_US';

  let characterURL = characterData.media.render_url;
  let characterStyle = {
    background: `url(${characterURL})no-repeat`,
  };

  return (
    <div id="character-display">
      <div className="cd_header-wrapper">
        <div className="cd_header-row">
          <h1>{`${characterData.profile.name} - ${characterData.profile.realm.name[locale_string]} (US)`}</h1>
        </div>
        {characterData.profile.guild && (
          <div className="cd_header-row">
            <h4>{`<${characterData.profile.guild.name}>`}</h4>
          </div>
        )}
      </div>
      <div className="cd-character-image" style={characterStyle}></div>
    </div>
  );
};

export default CharacterDisplay;
