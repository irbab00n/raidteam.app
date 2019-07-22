import React from 'react';
import './_ItemLevel.scss';

import DisplayContainer from '../DisplayContainer';
import DisplayHeader from '../DisplayHeader';

interface ItemLevelProps {
  characterData: any;
}

const ItemLevel = (props: ItemLevelProps) => {
  const { characterData } = props;
  const rangeMIN = 400;
  const rangeMAX = 450;

  const calculateStringColor = ilvl => {
    if (ilvl < rangeMIN) {
      return 'poor';
    }
    if (ilvl > rangeMAX) {
      return 'artifact';
    }
    let range = rangeMAX - rangeMIN;
    let difference = ilvl - rangeMIN;
    let percentage = (difference / range) * 100;
    if (percentage >= 0 && percentage <= 15) {
      return 'poor';
    } else if (percentage >= 16 && percentage <= 30) {
      return 'common';
    } else if (percentage >= 31 && percentage <= 50) {
      return 'uncommon';
    } else if (percentage >= 51 && percentage <= 74) {
      return 'rare';
    } else if (percentage >= 75 && percentage <= 94) {
      return 'epic';
    } else if (percentage >= 95 && percentage <= 99) {
      return 'legendary';
    } else if (percentage >= 100) {
      return 'artifact';
    } else {
      return 'poor';
    }
  };

  console.log(calculateStringColor(characterData.profile.equipped_item_level));

  return (
    <DisplayContainer>
      <DisplayHeader>
        <h4>Item Level</h4>
      </DisplayHeader>
      <div className="item-level-row">
        <div className="item-level-wrapper">
          <h1 className={calculateStringColor(characterData.profile.equipped_item_level)}>
            {characterData.profile.equipped_item_level}
          </h1>
          <span className="item-level-label">Equipped</span>
        </div>
        <div className="item-level-wrapper">
          <h1 className={calculateStringColor(characterData.profile.average_item_level)}>
            {characterData.profile.average_item_level}
          </h1>
          <span className="item-level-label">Average</span>
        </div>
      </div>
    </DisplayContainer>
  );
};

export default ItemLevel;
