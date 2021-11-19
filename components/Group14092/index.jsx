import React from "react";
import Group14078 from "../Group14078";
import styled from "styled-components";
import {
  FirasansSemiBoldAbbey10px,
  BarlowSemiBoldAbbey14px,
  BarlowSemiBoldCeleste24px,
  BarlowSemiBoldGray12px,
} from "../../styledMixins";


class Group14092 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Group140921 className={`group-14092 ${className || ""}`}>
        <OverlapGroup6 className="overlap-group6">
          <Text21 className="text-21">|</Text21>
          <OverlapGroup2 className="overlap-group2-1">
            <Group14088 className="group-14088">
              <X18THOCTOBER2021 className="x18-th-october-2021">18TH OCTOBER 2021</X18THOCTOBER2021>
              <Text22 className="text-22">MP Excise Act Alcohol Abuse Video Released</Text22>
              <Group14078 />
            </Group14088>
            <OverlapGroup className="overlap-group-4">
              <TAG1 className="tag-1">TAG 1</TAG1>
            </OverlapGroup>
            <OverlapGroup1 className="overlap-group1-2">
              <TAG1 className="tag-2">TAG 2</TAG1>
            </OverlapGroup1>
          </OverlapGroup2>
        </OverlapGroup6>
      </Group140921>
    );
  }
}

const Group140921 = styled.div`
  height: 118px;
  margin-top: 32px;
  display: flex;
  padding: 0 20px;
  justify-content: flex-end;
  align-items: center;
  min-width: 264px;
  background-color: var(--spring-wood-2);
  border-radius: 5px;
  box-shadow: 0px 4px 45px #00000009;

  &.group-14092.group-14093 {
    margin-top: 24px;
  }

  &.group-14092.group-14094 {
    margin-top: 24px;
  }
`;

const OverlapGroup6 = styled.div`
  width: 219px;
  height: 86px;
  position: relative;
`;

const Text21 = styled.div`
  ${BarlowSemiBoldCeleste24px}
  position: absolute;
  top: 0;
  left: 108px;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 219px;
  height: 78px;
  top: 8px;
  left: 0;
`;

const Group14088 = styled.div`
  position: absolute;
  width: 219px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 78px;
`;

const X18THOCTOBER2021 = styled.div`
  ${BarlowSemiBoldGray12px}
  min-height: 14px;
  letter-spacing: 0;
`;

const Text22 = styled.p`
  ${BarlowSemiBoldAbbey14px}
  width: 215px;
  min-height: 34px;
  margin-top: 8px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  height: 16px;
  top: 0;
  left: 120px;
  display: flex;
  padding: 0 6px;
  align-items: center;
  min-width: 37px;
  background-color: var(--bon-jour);
  border-radius: 2px;
`;

const TAG1 = styled.div`
  ${FirasansSemiBoldAbbey10px}
  min-height: 12px;
  min-width: 25px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  height: 16px;
  top: 0;
  left: 165px;
  display: flex;
  padding: 0 6px;
  align-items: center;
  min-width: 37px;
  background-color: var(--bon-jour);
  border-radius: 2px;
`;

export default Group14092;
