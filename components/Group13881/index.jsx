import React from "react";
import styled from "styled-components";
import { BarlowNormalAbbey24px, PlayfairdisplayBoldMineShaft30px } from "../../styledMixins";


class Group13881 extends React.Component {
  render() {
    return (
      <Group138811>
        <Litigation>Litigation</Litigation>
        <Text75>
          Provide quality legal represen- tation to regularly persecuted vulnerable groups &amp; pursue constitutional
          remedies.
        </Text75>
      </Group138811>
    );
  }
}

const Group138811 = styled.div`
  width: 336px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 180px;
`;

const Litigation = styled.div`
  ${PlayfairdisplayBoldMineShaft30px}
  min-height: 40px;
  margin-right: 2px;
  min-width: 136px;
  letter-spacing: 0;
`;

const Text75 = styled.div`
  ${BarlowNormalAbbey24px}
  width: 332px;
  min-height: 116px;
  margin-top: 24px;
  margin-right: 4px;
  letter-spacing: 0;
`;

export default Group13881;
