import React from "react";
import Group13909 from "../Group13909";
import styled from "styled-components";
import { FirasansSemiBoldAbbey16px } from "../../styledMixins";


class Group14095 extends React.Component {
  render() {
    const { className, group13909Props } = this.props;

    return (
      <Group140951 className={`group-14095 ${className || ""}`}>
        <Group13909 className={group13909Props.className} />
        <CONTACTUS className="contact-us">CONTACT US</CONTACTUS>
      </Group140951>
    );
  }
}

const Group140951 = styled.div`
  position: absolute;
  height: 24px;
  top: 1090px;
  left: 66px;
  display: flex;
  align-items: center;
  min-width: 123px;

  &.group-14095.group-14095-1 {
    position: relative;
    align-self: flex-start;
    margin-top: 24px;
    margin-left: 48px;
    top: unset;
    left: unset;
  }

  &.group-14095.group-14095-2 {
    position: relative;
    align-self: flex-start;
    margin-top: 24px;
    margin-left: 48px;
    top: unset;
    left: unset;
  }

  &.group-14095.group-14095-3 {
    position: relative;
    align-self: flex-start;
    margin-top: 24px;
    margin-left: 48px;
    top: unset;
    left: unset;
  }
`;

const CONTACTUS = styled.div`
  ${FirasansSemiBoldAbbey16px}
  min-height: 19px;
  margin-left: 8px;
  margin-bottom: 1px;
  min-width: 89px;
  letter-spacing: 0;
  text-decoration: underline;
`;

export default Group14095;
