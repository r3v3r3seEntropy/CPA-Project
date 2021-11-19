import React from "react";
import Group13909 from "../Group13909";
import styled from "styled-components";
import { PlayfairdisplayBoldMineShaft36px, FirasansSemiBoldAbbey16px, BarlowMediumAbbey22px } from "../../styledMixins";


class Group14098 extends React.Component {
  render() {
    const { className, group13909Props } = this.props;

    return (
      <Group140981 className={`group-14098 ${className || ""}`}>
        <OverlapGroup11 className="overlap-group11-5">
          <SupportUs className="support-us-9">Support Us</SupportUs>
          <Text134 className="text-134">
            The CPA Project is committed to ending mass incarceration and excessive punishment, challenging caste-based
            systemic injustices and targetting. <br />
            <br />
            Support our work!
          </Text134>
          <FlexRow className="flex-row-12">
            <Group13909 className={group13909Props.className} />
            <SUPPORTUS className="support-us-10">SUPPORT US</SUPPORTUS>
          </FlexRow>
        </OverlapGroup11>
      </Group140981>
    );
  }
}

const Group140981 = styled.div`
  height: 675px;
  z-index: 3;
  margin-right: -6px;
  display: flex;
  align-items: flex-start;
  min-width: 366px;

  &.group-14098.group-14098-1 {
    z-index: 4;
  }
`;

const OverlapGroup11 = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  padding: 56px 0;
  align-items: center;
  min-height: 675px;
  background-color: var(--green-white);
`;

const SupportUs = styled.div`
  ${PlayfairdisplayBoldMineShaft36px}
  min-height: 48px;
  margin-right: 79px;
  min-width: 185px;
  letter-spacing: 0;
`;

const Text134 = styled.div`
  ${BarlowMediumAbbey22px}
  width: 264px;
  min-height: 297px;
  margin-top: 56px;
  letter-spacing: 0;
  line-height: 33px;
`;

const FlexRow = styled.div`
  height: 24px;
  position: relative;
  align-self: flex-start;
  margin-top: 20px;
  margin-left: 48px;
  display: flex;
  align-items: center;
  min-width: 123px;
`;

const SUPPORTUS = styled.div`
  ${FirasansSemiBoldAbbey16px}
  min-height: 19px;
  margin-left: 8px;
  margin-bottom: 1px;
  min-width: 91px;
  letter-spacing: 0;
  text-decoration: underline;
`;

export default Group14098;
