import React from "react";
import styled from "styled-components";


class Group13888 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Group138881 className={`group-13888 ${className || ""}`}>
        <Vector19 className="vector-19" src="/img/vector-19-2@2x.svg" />
        <Ellipse12 className="ellipse-12-1"></Ellipse12>
      </Group138881>
    );
  }
}

const Group138881 = styled.div`
  margin-top: 4px;
  margin-left: 3px;
  display: flex;
  align-items: center;
  min-width: 60px;

  &.group-13888.group-13889 {
    margin-left: unset;
  }

  &.group-13888.group-13890 {
    margin-left: unset;
  }

  &.group-13888.group-13889-1 {
    margin-left: unset;
  }

  &.group-13888.group-13890-1 {
    margin-left: unset;
  }

  &.group-13888.group-13889-2 {
    margin-left: unset;
  }

  &.group-13888.group-13890-2 {
    margin-left: unset;
  }

  &.group-13888.group-13899 {
    position: absolute;
    height: 10px;
    top: 80px;
    left: 0;
    transform: rotate(180deg);
    margin-top: unset;
    margin-left: unset;
  }

  &.group-13888.group-13889-3 {
    margin-left: unset;
  }

  &.group-13888.group-13890-3 {
    margin-left: unset;
  }
`;

const Vector19 = styled.img`
  width: 48px;
  height: 8px;
  margin-left: -4px;
`;

const Ellipse12 = styled.div`
  width: 10px;
  height: 10px;
  margin-left: 6px;
  background-color: var(--bon-jour);
  border-radius: 5px;
`;

const Vector191 = styled.img`
  .group-13888.group-13899 & {
    margin-bottom: 0;
    transform: rotate(-180deg);
  }
`;

const Ellipse121 = styled.div`
  .group-13888.group-13899 & {
    align-self: flex-end;
    margin-bottom: 0;
    background-color: var(--silver);
  }
`;

export default Group13888;
