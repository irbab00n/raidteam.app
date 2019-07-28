import React from 'react';
import './_CurrentProgression.scss';

interface CurrentProgressionHeaderProps {
  instanceTitle?: string;
  instanceImage?: string;
  killCounts?: { [key: string]: number };
}

const CurrentProgressionHeader = (props: CurrentProgressionHeaderProps) => {
  const { instanceImage, instanceTitle, killCounts = {} } = props;
  const instanceTitleStyle = {
    background: `url(${instanceImage})no-repeat`,
  };

  const chooseProgressColor = percentage => {
    console.log('percentage: ', percentage);
    if (percentage >= 0 && percentage <= 25) {
      return 'common';
    }
    if (percentage >= 26 && percentage <= 49) {
      return 'uncommon';
    }
    if (percentage >= 50 && percentage <= 74) {
      return 'rare';
    }
    if (percentage >= 75 && percentage < 100) {
      return 'epic';
    }
    if (percentage >= 100) {
      return 'legendary';
    }
  };

  const lfrProgressPercentage = (killCounts.lfr / killCounts.bossCount) * 100;
  const normalProgressPercentage = (killCounts.normal / killCounts.bossCount) * 100;
  const heroicProgressPercentage = (killCounts.heroic / killCounts.bossCount) * 100;
  const mythicProgressPercentage = (killCounts.mythic / killCounts.bossCount) * 100;

  return (
    <div className="cur_prog_rt-header-wrapper">
      <div className="cur_prog_rt-header-instance-title" style={instanceTitleStyle}>
        {instanceTitle}
      </div>
      <div className="cur_prog-rt-column lfr">
        <div className="kill-tracker title">LFR</div>
        <div
          className={`kill-tracker ${chooseProgressColor(lfrProgressPercentage)}`}
        >{`${killCounts.lfr}/${killCounts.bossCount}`}</div>
        <div className="kill-tracker">
          <progress
            className={chooseProgressColor(lfrProgressPercentage)}
            max="100"
            value={lfrProgressPercentage}
          />
        </div>
      </div>
      <div className="cur_prog-rt-column normal">
        <div className="kill-tracker title">Normal</div>
        <div
          className={`kill-tracker ${chooseProgressColor(normalProgressPercentage)}`}
        >{`${killCounts.normal}/${killCounts.bossCount}`}</div>
        <div className="kill-tracker">
          <progress
            className={chooseProgressColor(normalProgressPercentage)}
            max="100"
            value={normalProgressPercentage}
          />
        </div>
      </div>
      <div className="cur_prog-rt-column heroic">
        <div className="kill-tracker title">Heroic</div>
        <div
          className={`kill-tracker ${chooseProgressColor(heroicProgressPercentage)}`}
        >{`${killCounts.heroic}/${killCounts.bossCount}`}</div>
        <div className="kill-tracker">
          <progress
            className={chooseProgressColor(heroicProgressPercentage)}
            max="100"
            value={heroicProgressPercentage}
          />
        </div>
      </div>
      <div className="cur_prog-rt-column mythic">
        <div className="kill-tracker title">Mythic</div>
        <div
          className={`kill-tracker ${chooseProgressColor(mythicProgressPercentage)}`}
        >{`${killCounts.mythic}/${killCounts.bossCount}`}</div>
        <div className="kill-tracker">
          <progress
            className={chooseProgressColor(mythicProgressPercentage)}
            max="100"
            value={mythicProgressPercentage}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentProgressionHeader;
