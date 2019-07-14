import * as React from 'react';

import { CharacterHeader } from '../../components/CharacterPage';
import { Text } from '../../components/Inputs';
import { PrimaryButton, SecondaryButton } from '../../components/Buttons';

interface CharacterPageProps {
  match: object;
}

const CharacterPage = (props: CharacterPageProps) => {
  const { match } = props;

  console.log('match on Character Page: ', match);

  return (
    <div id="character-page">
      <CharacterHeader
        left={'My Characters'}
        right={
          <>
            <Text
              backgroundColor="#113149"
              borderWidth="0px"
              borderRadius="20px"
              height="40px"
              textColor="#20f6f8"
              // width="400px"
              rightElement={
                <PrimaryButton height="100%" borderSize="0px" borderRadius="0px" width="75px">
                  <i className="fas fa-search"></i>
                </PrimaryButton>
              }
              // leftElement={'Find Character'}
            />
          </>
        }
      />
    </div>
  );
};

export default CharacterPage;
