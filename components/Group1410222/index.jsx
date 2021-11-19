import React from "react";
import Group13888 from "../Group13888";
import styled from "styled-components";
import { BarlowNormalAbbey20px, PlayfairdisplayBoldMineShaft96px } from "../../styledMixins";


class Group1410222 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Group13894 className={`group-13894 ${className || ""}`}>
        <Text8 className="text-8">40+</Text8>
        <Group13888 />
        <Text7 className="text-7">
          <span className="span0-9 barlow-normal-abbey-20px">persons from marginalised communities </span>
          <span className="span1-9 barlow-semi-bold-abbey-20px">released</span>
          <span className="span2-4 barlow-normal-abbey-20px"> on rightful bail</span>
        </Text7>
      </Group13894>
    );
  }
}

const Group13894 = styled.div`
  width: 243px;
  position: relative;
  align-self: flex-start;
  margin-top: 24px;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 218px;

  &.group-13894.group-14102 {
    margin-top: 29px;
    align-self: unset;
  }
`;

const Text8 = styled.h1`
  ${PlayfairdisplayBoldMineShaft96px}
  min-height: 128px;
  letter-spacing: 0;
`;

const Text7 = styled.div`
  ${BarlowNormalAbbey20px}
  width: 239px;
  min-height: 72px;
  margin-top: 4px;
  letter-spacing: 0;
`;

export default Group1410222;
