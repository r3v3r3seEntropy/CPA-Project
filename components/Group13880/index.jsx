import React from "react";
import styled from "styled-components";
import { BarlowNormalAbbey30px, PlayfairdisplayBoldMineShaft64px } from "../../styledMixins";


class Group13880 extends React.Component {
  render() {
    return (
      <Group138801>
        <OurVision>Our Vision</OurVision>
        <Group13879>
          <Group13875 src="/img/group-13875-1@2x.svg" />
          <Text89>
            To create a society that values
            <br />
            community care over incarceration <br />
            and where caste&#39;s stronghold over the
            <br />
            justice system is dismantled.
          </Text89>
        </Group13879>
      </Group138801>
    );
  }
}

const Group138801 = styled.div`
  width: 690px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 225px;
`;

const OurVision = styled.div`
  ${PlayfairdisplayBoldMineShaft64px}
  min-height: 85px;
  letter-spacing: 0;
`;

const Group13879 = styled.div`
  width: 690px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 116px;
`;

const Group13875 = styled.img`
  width: 86px;
  height: 10px;
  margin-top: -5px;
  margin-left: -1.74px;
`;

const Text89 = styled.div`
  ${BarlowNormalAbbey30px}
  width: 688px;
  min-height: 108px;
  margin-top: 3px;
  letter-spacing: 0;
`;

export default Group13880;
