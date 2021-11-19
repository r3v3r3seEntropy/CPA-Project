import React from "react";
import styled from "styled-components";


class Group13912 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Group139121 className={`group-13912-6 ${className || ""}`}>
        <Group className="group-20" src="/img/group-21@2x.svg" />
      </Group139121>
    );
  }
}

const Group139121 = styled.div`
  position: absolute;
  height: 10px;
  top: 17px;
  left: 100px;
  display: flex;
  padding: 2px 2px;
  align-items: flex-start;
  min-width: 10px;
  background-color: var(--westar);
  border-radius: 5px;
  transform: rotate(90deg);

  &.group-13912-6.group-13912-7 {
    left: 139px;
  }

  &.group-13912-6.group-13912-8 {
    left: 139px;
  }
`;

const Group = styled.img`
  width: 6px;
  height: 6px;
  transform: rotate(-90deg);
`;

export default Group13912;
