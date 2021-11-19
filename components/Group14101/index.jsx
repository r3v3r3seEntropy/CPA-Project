import React from "react";
import Group13934 from "../Group13934";
import Group13936 from "../Group13936";
import Group13937 from "../Group13937";
import styled from "styled-components";
import {
  PlayfairdisplayBoldWhite36px,
  BarlowBoldSpringWood20px,
  BarlowMediumSpringWood20px,
  BarlowNormalSpringWood18px,
  Border2pxMistGray,
  BarlowSemiBoldSpringWood18px,
} from "../../styledMixins";


class Group14101 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Group141011 className={`group-14101 ${className || ""}`}>
        <OverlapGroup12 className="overlap-group12-5">
          <FollowUs className="follow-us-1">Follow Us</FollowUs>
          <Group13938 className="group-13938-2" src="/img/group-13938@2x.svg" />
          <FlexRow className="flex-row-13">
            <Group13934 />
            <Group13936 />
          </FlexRow>
          <FlexRow1 className="flex-row-14">
            <Group13935 className="group-13935-5">
              <OURWORK className="our-work-7">OUR WORK</OURWORK>
              <Group13931 className="group-13931-2">
                <Litigation className="litigation-5">Litigation</Litigation>
                <ResearchAdvocacy className="research-advocacy-5">
                  Research &amp;
                  <br />
                  Advocacy
                </ResearchAdvocacy>
                <CapacityBuilding className="capacity-building-5">Capacity Building</CapacityBuilding>
                <CapacityBuilding className="resources-2">Resources</CapacityBuilding>
              </Group13931>
            </Group13935>
            <Group13937 />
          </FlexRow1>
          <Text136 className="text-136">
            <span className="span0-28 barlow-semi-bold-spring-wood-18px">
              The CPA Project,
              <br />
            </span>
            <span className="span1-28 barlow-normal-spring-wood-18px">Bhopal, MP - 300101</span>
          </Text136>
        </OverlapGroup12>
        <OverlapGroup1 className="overlap-group1-14">
          <OverlapGroup className="overlap-group-21">
            <C className="c-3" src="/img/c@2x.svg" />
            <Ellipse17 className="ellipse-17-3"></Ellipse17>
          </OverlapGroup>
          <Text137 className="text-137">2021 – CPA Project. All rights reserved.</Text137>
        </OverlapGroup1>
      </Group141011>
    );
  }
}

const Group141011 = styled.div`
  width: 364px;
  z-index: 5;
  margin-right: -4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 796px;

  &.group-14101.group-14101-1 {
    z-index: 6;
  }
`;

const OverlapGroup12 = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  padding: 29px 46px;
  align-items: flex-start;
  min-height: 705px;
  background-color: var(--armadillo);
`;

const FollowUs = styled.div`
  ${PlayfairdisplayBoldWhite36px}
  min-height: 48px;
  margin-top: 27px;
  margin-left: 2px;
  letter-spacing: 0;
`;

const Group13938 = styled.img`
  width: 194px;
  height: 29px;
  margin-top: 14px;
  margin-left: 1px;
`;

const FlexRow = styled.div`
  height: 130px;
  position: relative;
  margin-top: 56px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 250px;
`;

const FlexRow1 = styled.div`
  height: 182px;
  position: relative;
  align-self: flex-end;
  margin-top: 58px;
  display: flex;
  align-items: flex-start;
  min-width: 266px;
`;

const Group13935 = styled.div`
  width: 144px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 182px;
`;

const OURWORK = styled.div`
  ${BarlowBoldSpringWood20px}
  min-height: 24px;
  letter-spacing: 0;
`;

const Group13931 = styled.div`
  ${BarlowNormalSpringWood18px}
  width: 150px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 134px;
`;

const Litigation = styled.div`
  min-height: 22px;
  letter-spacing: 0;
`;

const ResearchAdvocacy = styled.div`
  width: 142px;
  min-height: 44px;
  margin-top: 8px;
  letter-spacing: 0;
`;

const CapacityBuilding = styled.div`
  min-height: 22px;
  margin-top: 8px;
  letter-spacing: 0;
`;

const Text136 = styled.div`
  ${BarlowSemiBoldSpringWood18px}
  min-height: 44px;
  margin-top: 59px;
  margin-left: 2px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  height: 91px;
  display: flex;
  padding: 21px 54px;
  align-items: flex-start;
  min-width: 360px;
  background-color: var(--armadillo-2);
`;

const OverlapGroup = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
  margin-top: 7px;
  border-radius: 9px;
`;

const C = styled.img`
  position: absolute;
  width: 8px;
  height: 11px;
  top: 4px;
  left: 5px;
`;

const Ellipse17 = styled.div`
  ${Border2pxMistGray}
  position: absolute;
  width: 18px;
  height: 18px;
  top: 0;
  left: 0;
  border-radius: 9px;
`;

const Text137 = styled.div`
  ${BarlowMediumSpringWood20px}
  width: 191px;
  min-height: 48px;
  align-self: flex-end;
  margin-left: 7px;
  letter-spacing: 0;
`;

export default Group14101;
