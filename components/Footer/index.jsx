import React from "react";
import Group14013 from "../Group14013";
import Group14012 from "../Group14012";
import styled from "styled-components";
import { Border2pxMistGray, BarlowSemiBoldSpringWood18px, BarlowMediumSpringWood20px } from "../../styledMixins";


class Footer extends React.Component {
  render() {
    const { className, group14013Props, group14012Props } = this.props;

    return (
      <Footer1 className={`footer ${className || ""}`}>
        <OverlapGroup2 className="overlap-group2-3">
          <Group14013 className={group14013Props.className} />
          <Group14012
            group13936Props={group14012Props.group13936Props}
            group13936Props2={group14012Props.group13936Props2}
            group13937Props={group14012Props.group13937Props}
          />
          <FlexCol className="flex-col-5">
            <Group14014 className="group-14014" src="/img/group-14014-3@2x.svg" />
            <Text71 className="text-71">
              <span className="span0-18 barlow-semi-bold-spring-wood-18px">
                The CPA Project,
                <br />
              </span>
              <span className="span1-18 barlow-normal-spring-wood-18px">Bhopal, MP - 300101</span>
            </Text71>
          </FlexCol>
        </OverlapGroup2>
        <OverlapGroup3 className="overlap-group3-2">
          <OverlapGroup1 className="overlap-group1-4">
            <C className="c-2" src="/img/c@2x.svg" />
            <Ellipse17 className="ellipse-17-2"></Ellipse17>
          </OverlapGroup1>
          <Text72 className="text-72">2021 – CPA Project. All rights reserved.</Text72>
        </OverlapGroup3>
      </Footer1>
    );
  }
}

const Footer1 = styled.div`
  position: fixed;
  width: 1920px;
  top: 8819px;
  left: 0;
  z-index: 18;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 491px;

  &.footer.footer-1 {
    z-index: 12;
    position: unset;
    top: unset;
    left: unset;
  }

  &.footer.footer-2 {
    z-index: 5;
    margin-top: 1px;
    position: unset;
    top: unset;
    left: unset;
  }
`;

const OverlapGroup2 = styled.div`
  height: 409px;
  position: relative;
  display: flex;
  padding: 124px 261px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1920px;
  background-color: var(--armadillo);
`;

const FlexCol = styled.div`
  width: 154px;
  margin-left: 90px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 89px;
`;

const Group14014 = styled.img`
  width: 149px;
  height: 22px;
`;

const Text71 = styled.div`
  ${BarlowSemiBoldSpringWood18px}
  min-height: 44px;
  margin-top: 23px;
  margin-left: 1px;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  height: 82px;
  display: flex;
  padding: 26px 242px;
  align-items: flex-start;
  min-width: 1920px;
  background-color: var(--armadillo-2);
`;

const OverlapGroup1 = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
  margin-top: 3px;
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

const Text72 = styled.div`
  ${BarlowMediumSpringWood20px}
  min-height: 24px;
  margin-left: 7px;
  letter-spacing: 0;
`;

const OverlapGroup7 = styled.div`
  .footer.footer-1 & {
    padding: 124px 262px;
    justify-content: unset;
  }
`;

const FlexCol1 = styled.div`
  .footer.footer-1 & {
    width: 153px;
  }
`;

const OverlapGroup8 = styled.div`
  .footer.footer-2 & {
    padding: 124px 262px;
    justify-content: unset;
  }
`;

const FlexCol2 = styled.div`
  .footer.footer-2 & {
    width: 153px;
  }
`;

export default Footer;
