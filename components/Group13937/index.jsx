import React from "react";
import styled from "styled-components";
import { BarlowBoldSpringWood20px, BarlowNormalSpringWood18px } from "../../styledMixins";


class Group13937 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Group139371 className={`group-13937 ${className || ""}`}>
        <QUICKLINKS className="quick-links">QUICK LINKS</QUICKLINKS>
        <Group13933 className="group-13933">
          <WorkWithUs className="work-with-us-2">Work with us</WorkWithUs>
          <SupportUs className="support-us-2">Support Us</SupportUs>
          <SupportUs className="contact-us-1">Contact Us</SupportUs>
        </Group13933>
      </Group139371>
    );
  }
}

const Group139371 = styled.div`
  width: 115px;
  margin-left: 7px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 130px;

  &.group-13937.group-13937-1 {
    margin-left: 38px;
    margin-top: unset;
  }

  &.group-13937.group-13937-2 {
    margin-left: 38px;
    margin-top: unset;
  }

  &.group-13937.group-13937-3 {
    margin-left: 38px;
    margin-top: unset;
  }

  &.group-13937.group-13937-4 {
    margin-left: 38px;
    margin-top: unset;
  }
`;

const QUICKLINKS = styled.div`
  ${BarlowBoldSpringWood20px}
  min-height: 24px;
  letter-spacing: 0;
`;

const Group13933 = styled.div`
  ${BarlowNormalSpringWood18px}
  width: 106px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 82px;
`;

const WorkWithUs = styled.div`
  min-height: 22px;
  letter-spacing: 0;
`;

const SupportUs = styled.div`
  min-height: 22px;
  margin-top: 8px;
  letter-spacing: 0;
`;

export default Group13937;
