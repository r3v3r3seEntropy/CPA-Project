import React from "react";
import styled from "styled-components";
import { PlayfairdisplayBoldWhite64px } from "../../styledMixins";


class Group14007 extends React.Component {
  render() {
    return (
      <Group140071>
        <OverlapGroup3>
          <Rectangle48></Rectangle48>
          <Text87>
            In May 2019, we received a distress call from the mother of a minor boy from the Pardhi community in Bhopal
            that her son has been arrested and detained illegally. The law does not allow for arrest of minors, let
            alone torture the boy endured. This is however, the everyday reality of several denoitifed tribes.
            <br />
            <br />
            Upon CPA&#39;s intervention, the 15-year-old Pardhi boy&#39;s case was transferred to the appropriate
            authorities (Juvenile Justice Board). He was granted bail finally, after a month. Community mechanisms were
            put in place to observe and help the child.
            <br />
            <br />
            Similarly, there are several cases where intervention at the right time has ensured that individuals have
            not had to spend more time than necessary in police custody, escape custodial violence and assert their
            rights.
          </Text87>
          <Text88>A 15 year old child detained</Text88>
        </OverlapGroup3>
      </Group140071>
    );
  }
}

const Group140071 = styled.div`
  z-index: 9;
  margin-right: -4px;
  display: flex;
  align-items: flex-start;
  min-width: 1924px;
`;

const OverlapGroup3 = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
  background-color: var(--bon-jour);
  background-image: url(/img/untitled-design-3--1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Rectangle48 = styled.div`
  position: absolute;
  width: 993px;
  height: 1079px;
  top: 0;
  left: 120px;
  background-color: #0b0b0b40;
  backdrop-filter: blur(15px) brightness(100%);
  -webkit-backdrop-filter: blur(15px) brightness(100%);
`;

const Text87 = styled.div`
  position: absolute;
  width: 781px;
  top: 293px;
  left: 220px;
  font-family: var(--font-family-barlow);
  font-weight: 500;
  color: var(--white);
  font-size: var(--font-size-l);
  letter-spacing: 0;
`;

const Text88 = styled.div`
  ${PlayfairdisplayBoldWhite64px}
  position: absolute;
  top: 174px;
  left: 220px;
  letter-spacing: 0;
`;

export default Group14007;
