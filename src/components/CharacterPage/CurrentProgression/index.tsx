import React from 'react';
import './_CurrentProgression.scss';

import DisplayContainer from '../DisplayContainer';
import DisplayHeader from '../DisplayHeader';
import ProgressBar from '../../ProgressBar';

interface CurrentProgressionProps {
  characterData: any;
}

const CurrentProgression = (props: CurrentProgressionProps) => {
  const { characterData } = props;

  console.log('character progression data: ', characterData.progression.raids);

  let latestRaid =
    characterData.progression && // if the progression property exists on the character data
    characterData.progression.raids && // if the raids exist on the progression object
    characterData.progression.raids[characterData.progression.raids.length - 1]; // grab the last entry out of the raids array

  console.log('latest raid the character has progressed through: ', latestRaid);

  /*
    bosses: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
      heroicKills: 0
      heroicTimestamp: 0
      id: 151881
      lfrKills: 0
      lfrTimestamp: 0
      mythicKills: 0
      mythicTimestamp: 0
      name: "Abyssal Commander Sivara"*******
      normalKills: 2
      normalTimestamp: 1563653725000
    heroic: 0
    id: 10425
    lfr: 0
    mythic: 0
    name: "The Eternal Palace"
    normal: 1


    if [difficulty] === 1
      -- icon will be yellow
      -- check through all of the bosses to see if all [difficulty]Kills are greater than 1
        -- if so, icon will be green
        

  */

  const getKillCount = (bosses, difficulty) => {
    return bosses.reduce((totalKills, boss) => {
      if (boss[`${difficulty}Kills`] > 0) {
        return totalKills + 1;
      } else {
        return totalKills;
      }
    }, 0);
  };

  const chooseProgressColor = percentage => {
    console.log('percentage: ', percentage);
    if (percentage >= 0 && percentage <= 25) {
      return 'common';
    }
    if (percentage >= 26 && percentage <= 50) {
      return 'uncommon';
    }
    if (percentage >= 51 && percentage <= 75) {
      return 'rare';
    }
    if (percentage >= 76 && percentage < 100) {
      return 'epic';
    }
    if (percentage >= 100) {
      return 'legendary';
    }
  };

  const chooseKillCountColor = kills => {
    if (kills === 0) {
      return 'common';
    }
    if (kills > 0 && kills <= 3) {
      return 'uncommon';
    }
    if (kills >= 4 && kills <= 6) {
      return 'rare';
    }
    if (kills >= 7 && kills <= 9) {
      return 'epic';
    }
    if (kills >= 10) {
      return 'legendary';
    }
    return 'poor';
  };

  const buildBossRows = bosses => {
    return bosses.map((boss, index) => {
      return (
        <div className="cur_prog_rt-row" key={`current-prog-row-${index}`}>
          <div className="boss-name">{boss.name}</div>
          <div className={`kill-tracker ${chooseKillCountColor(boss.lfrKills)}`}>
            {boss.lfrKills}
          </div>
          <div className={`kill-tracker ${chooseKillCountColor(boss.normalKills)}`}>
            {boss.normalKills}
          </div>
          <div className={`kill-tracker ${chooseKillCountColor(boss.heroicKills)}`}>
            {boss.heroicKills}
          </div>
          <div className={`kill-tracker ${chooseKillCountColor(boss.mythicKills)}`}>
            {boss.mythicKills}
          </div>
        </div>
      );
    });
  };

  const lfrKillCount = getKillCount(latestRaid.bosses, 'lfr');
  const normalKillCount = getKillCount(latestRaid.bosses, 'normal');
  const heroicKillCount = getKillCount(latestRaid.bosses, 'heroic');
  const mythicKillCount = getKillCount(latestRaid.bosses, 'mythic');

  const bossCount = latestRaid.bosses.length;

  const lfrProgressPercentage = (lfrKillCount / bossCount) * 100;
  const normalProgressPercentage = (normalKillCount / bossCount) * 100;
  const heroicProgressPercentage = (heroicKillCount / bossCount) * 100;
  const mythicProgressPercentage = (mythicKillCount / bossCount) * 100;

  return (
    <DisplayContainer id="current-progression">
      <DisplayHeader className="blue">
        <h4>Current Progression</h4>
      </DisplayHeader>
      <div className="cur_prog-wrapper">
        <div className="cur_prog-raid-table">
          <DisplayHeader className="dark-gray cur_prog_rt-row">
            <h4 className="boss-name cur_prog-raid-title">{latestRaid.name}</h4>
            <div className="kill-tracker title">LFR</div>
            <div className="kill-tracker title">Normal</div>
            <div className="kill-tracker title">Heroic</div>
            <div className="kill-tracker title">Mythic</div>
          </DisplayHeader>
          <div className="cur_prog_rt-row header-row">
            <div className="boss-name">Progress</div>
            <div
              className={`kill-tracker ${chooseProgressColor(lfrProgressPercentage)}`}
            >{`${lfrKillCount}/${bossCount}`}</div>
            <div
              className={`kill-tracker ${chooseProgressColor(normalProgressPercentage)}`}
            >{`${normalKillCount}/${bossCount}`}</div>
            <div
              className={`kill-tracker ${chooseProgressColor(heroicProgressPercentage)}`}
            >{`${heroicKillCount}/${bossCount}`}</div>
            <div
              className={`kill-tracker ${chooseProgressColor(mythicProgressPercentage)}`}
            >{`${mythicKillCount}/${bossCount}`}</div>
          </div>
          <div className="cur_prog_rt-row header-row">
            <div className="boss-name"></div>
            <div className="kill-tracker">
              <progress
                className={chooseProgressColor(lfrProgressPercentage)}
                max="100"
                value={lfrProgressPercentage}
              />
            </div>
            <div className="kill-tracker">
              {/* <progress
                className={chooseProgressColor(normalProgressPercentage)}
                max="100"
                value={normalProgressPercentage}
              /> */}
              <ProgressBar
                className={chooseProgressColor(normalProgressPercentage)}
                max="100"
                value={normalProgressPercentage}
                label={`${normalKillCount}/${bossCount}`}
              />
            </div>
            <div className="kill-tracker">
              <progress
                className={chooseProgressColor(heroicProgressPercentage)}
                max="100"
                value={heroicProgressPercentage}
              />
            </div>
            <div className="kill-tracker">
              <progress
                className={chooseProgressColor(mythicProgressPercentage)}
                max="100"
                value={mythicProgressPercentage}
              />
            </div>
          </div>
          {buildBossRows(latestRaid.bosses)}
        </div>
      </div>
    </DisplayContainer>
  );
};

export default CurrentProgression;
