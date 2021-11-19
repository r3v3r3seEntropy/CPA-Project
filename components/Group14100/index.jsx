import React from "react";
import Group14095 from "../Group14095";
import styled from "styled-components";
import { PlayfairdisplayBoldMineShaft36px, BarlowMediumAbbey22px } from "../../styledMixins";


class Group14100 extends React.Component {
  render() {
    const { className, group14095Props } = this.props;

    return (
      <Group141001 className={`group-14100 ${className || ""}`}>
        <WorkWithUs className="work-with-us-7">Work with us</WorkWithUs>
        <Text135 className="text-135">
          If you believe in our approach and work and want to join the movement in any capacity, we would love to hear
          from you.
          <br />
          <br />
          Do drop us a line!
        </Text135>
        <Group14095 className={group14095Props.className} group13909Props={group14095Props.group13909Props} />
      </Group141001>
    );
  }
}

const Group141001 = styled.div`
  width: 360px;
  z-index: 4;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 64px 0;
  align-items: center;
  min-height: 675px;
  background-color: var(--spring-wood-2);

  &.group-14100.group-14100-1 {
    z-index: 5;
  }

  &.group-14100.group-14100-2 {
    position: absolute;
    top: 2663px;
    left: 4px;
    z-index: unset;
  }
`;

const WorkWithUs = styled.div`
  ${PlayfairdisplayBoldMineShaft36px}
  min-height: 48px;
  margin-right: 46px;
  min-width: 218px;
  letter-spacing: 0;
`;

const Text135 = styled.div`
  ${BarlowMediumAbbey22px}
  width: 264px;
  min-height: 231px;
  margin-top: 56px;
  letter-spacing: 0;
  line-height: 33px;
`;

export default Group14100;
