import React from "react";
import styled from "styled-components";
import { BarlowNormalAbbey24px, PlayfairdisplayBoldMineShaft30px } from "../../styledMixins";


class Group13896 extends React.Component {
  render() {
    return (
      <Group138961>
        <CapacityBuilding>
          Capacity
          <br />
          Building
        </CapacityBuilding>
        <Text74>
          Empower communities and build a movement towards alternative justice practices that go beyond incarceration
          and criminalisation.
        </Text74>
      </Group138961>
    );
  }
}

const Group138961 = styled.div`
  width: 336px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 209px;
`;

const CapacityBuilding = styled.div`
  ${PlayfairdisplayBoldMineShaft30px}
  min-height: 40px;
  margin-right: 5px;
  min-width: 247px;
  letter-spacing: 0;
`;

const Text74 = styled.div`
  ${BarlowNormalAbbey24px}
  width: 332px;
  min-height: 145px;
  margin-top: 24px;
  margin-right: 4px;
  letter-spacing: 0;
`;

export default Group13896;
