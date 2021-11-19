import React from "react";
import Group13888 from "../Group13888";
import styled from "styled-components";
import { BarlowNormalAbbey30px, PlayfairdisplayBoldMineShaft96px } from "../../styledMixins";


class Group13893 extends React.Component {
  render() {
    const { className, group13888Props } = this.props;

    return (
      <Group138931 className={`group-13893-1 ${className || ""}`}>
        <Text53 className="text-53">50+</Text53>
        <Group13888 className={group13888Props.className} />
        <Text52 className="text-52">
          <span className="span0-17 barlow-normal-abbey-30px">persons provided with </span>
          <span className="span1-17 barlow-semi-bold-abbey-30px">quality representation</span>
          <span className="span2-9 barlow-normal-abbey-30px"> in district courts</span>
        </Text52>
      </Group138931>
    );
  }
}

const Group138931 = styled.div`
  width: 325px;
  position: relative;
  margin-left: 108px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 254px;

  &.group-13893-1.group-13893-2 {
    margin-left: 152px;
  }
`;

const Text53 = styled.div`
  ${PlayfairdisplayBoldMineShaft96px}
  min-height: 128px;
  letter-spacing: 0;
`;

const Text52 = styled.div`
  ${BarlowNormalAbbey30px}
  width: 321px;
  min-height: 108px;
  margin-top: 4px;
  letter-spacing: 0;
`;

export default Group13893;
