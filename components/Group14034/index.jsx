import React from "react";
import Group13916 from "../Group13916";
import styled from "styled-components";
import { FirasansSemiBoldRonchi18px } from "../../styledMixins";


class Group14034 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Group14059 className={`group-14059 ${className || ""}`}>
        <Group13916 />
        <READMORE className="read-more-5">READ MORE</READMORE>
      </Group14059>
    );
  }
}

const Group14059 = styled.div`
  height: 22px;
  position: relative;
  margin-top: 15px;
  display: flex;
  align-items: center;
  min-width: 121px;

  &.group-14059.group-14034-2 {
    position: absolute;
    top: 277px;
    left: 85px;
    margin-top: unset;
  }

  &.group-14059.group-14034-3 {
    margin-top: 8px;
  }

  &.group-14059.group-14034-4 {
    position: absolute;
    top: 277px;
    left: 85px;
    margin-top: unset;
  }

  &.group-14059.group-14034-5 {
    position: absolute;
    top: 277px;
    left: 85px;
    margin-top: unset;
  }

  &.group-14059.group-14034-6 {
    position: absolute;
    top: 273px;
    left: 85px;
    margin-top: unset;
  }

  &.group-14059.group-14024 {
    margin-top: 16px;
  }

  &.group-14059.group-14024-1 {
    margin-top: 16px;
  }
`;

const READMORE = styled.div`
  ${FirasansSemiBoldRonchi18px}
  min-height: 22px;
  margin-left: 8px;
  min-width: 95px;
  letter-spacing: 0;
  text-decoration: underline;
`;

export default Group14034;
