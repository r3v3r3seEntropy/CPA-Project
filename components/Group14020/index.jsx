import React from "react";
import Group13916 from "../Group13916";
import Group13960 from "../Group13960";
import styled from "styled-components";
import {
  PlayfairdisplayBoldMineShaft30px,
  FirasansSemiBoldAbbey18px,
  BarlowSemiBoldCeleste24px,
  BarlowSemiBoldGray24px,
} from "../../styledMixins";


class Group14020 extends React.Component {
  render() {
    const { className, group13960Props } = this.props;

    return (
      <Group140201 className={`group-14020 ${className || ""}`}>
        <Group14019 className="group-14019">
          <FlexRow className="flex-row-8">
            <X18THOCTOBER2021 className="x18-th-october-2021-1">18TH OCTOBER 2021</X18THOCTOBER2021>
            <Text98 className="text-98">|</Text98>
            <OverlapGroup className="overlap-group-13">
              <TAG1 className="tag-1-1">TAG 1</TAG1>
            </OverlapGroup>
            <OverlapGroup1 className="overlap-group1-6">
              <TAG2 className="tag-2-1">TAG 2</TAG2>
            </OverlapGroup1>
          </FlexRow>
          <Text97 className="text-97">MP Excise Act Alcohol Abuse Video Released</Text97>
          <Group14018 className="group-14018">
            <Group13916 />
            <READMORE className="read-more-12">READ MORE</READMORE>
          </Group14018>
        </Group14019>
        <Group13960 className={group13960Props.className} />
      </Group140201>
    );
  }
}

const Group140201 = styled.div`
  height: 214px;
  position: relative;
  margin-top: 57px;
  display: flex;
  padding: 24px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1396px;
  background-color: var(--alabaster);
  border-radius: 5px;

  &.group-14020.group-14021 {
    margin-top: 22px;
  }

  &.group-14020.group-14022 {
    margin-top: 48px;
  }
`;

const Group14019 = styled.div`
  width: 614px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 118px;
`;

const FlexRow = styled.div`
  height: 29px;
  display: flex;
  align-items: center;
  min-width: 353px;
`;

const X18THOCTOBER2021 = styled.div`
  ${BarlowSemiBoldGray24px}
  min-height: 29px;
  min-width: 210px;
  letter-spacing: 0;
`;

const Text98 = styled.div`
  ${BarlowSemiBoldCeleste24px}
  min-height: 29px;
  margin-left: 8px;
  min-width: 5px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  height: 27px;
  margin-left: 8px;
  display: flex;
  padding: 2px 6px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 57px;
  background-color: var(--bon-jour);
  border-radius: 8px;
`;

const TAG1 = styled.div`
  ${FirasansSemiBoldAbbey18px}
  min-height: 22px;
  min-width: 44px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  height: 27px;
  margin-left: 8px;
  display: flex;
  padding: 2px 5px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 57px;
  background-color: var(--bon-jour);
  border-radius: 8px;
`;

const TAG2 = styled.div`
  ${FirasansSemiBoldAbbey18px}
  min-height: 22px;
  min-width: 45px;
  letter-spacing: 0;
`;

const Text97 = styled.div`
  ${PlayfairdisplayBoldMineShaft30px}
  min-height: 31px;
  margin-top: 18px;
  letter-spacing: 0;
  line-height: 30.9px;
  white-space: nowrap;
`;

const Group14018 = styled.div`
  height: 22px;
  position: relative;
  margin-top: 18px;
  display: flex;
  align-items: center;
  min-width: 121px;
`;

const READMORE = styled.div`
  ${FirasansSemiBoldAbbey18px}
  min-height: 22px;
  margin-left: 8px;
  min-width: 95px;
  letter-spacing: 0;
  text-decoration: underline;
`;

export default Group14020;
