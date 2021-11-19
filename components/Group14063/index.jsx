import React from "react";
import styled from "styled-components";


class Group14063 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Group140631 className={`group-14063-1 ${className || ""}`}>
        <Group className="group" src="/img/group-11@2x.svg" />
      </Group140631>
    );
  }
}

const Group140631 = styled.div`
  position: fixed;
  height: 22px;
  top: 13px;
  left: 278px;
  z-index: 16;
  display: flex;
  padding: 4.2px 4px;
  align-items: flex-start;
  min-width: 22px;
  background-color: var(--green-white);
  border-radius: 150px;

  &.group-14063-1.group-14063-2 {
    z-index: 9;
  }

  &.group-14063-1.group-14063-3 {
    z-index: 12;
  }

  &.group-14063-1.group-14063-4 {
    z-index: 7;
  }
`;

const Group = styled.img`
  width: 14px;
  height: 13px;
`;

export default Group14063;
