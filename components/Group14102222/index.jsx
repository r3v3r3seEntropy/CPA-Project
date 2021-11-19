import React from "react";
import Group14079 from "../Group14079";
import styled from "styled-components";


class Group14102222 extends React.Component {
  render() {
    const { className, group14079Props } = this.props;

    return (
      <Group14102 className={`group-14102-9 ${className || ""}`}>
        <OverlapGroup className="overlap-group-26">
          <Image className="image-64" src="/img/image-25@2x.png" />
          <Image55 className="image-55-1" src="/img/image-55@2x.png" />
          <Group14079
            text68={group14079Props.text68}
            className={group14079Props.className}
            group14078Props={group14079Props.group14078Props}
          />
        </OverlapGroup>
      </Group14102>
    );
  }
}

const Group14102 = styled.div`
  position: absolute;
  height: 118px;
  top: 1642px;
  left: 49px;
  display: flex;
  align-items: flex-start;
  min-width: 264px;
  background-color: var(--spring-wood-2);
  border-radius: 5px;
  box-shadow: 0px 0px 45px #00000014;

  &.group-14102-9.group-14102-10 {
    top: 1784px;
  }
`;

const OverlapGroup = styled.div`
  width: 298px;
  height: 196px;
  position: relative;
  margin-left: -37px;
  margin-top: -37px;
`;

const Image = styled.img`
  position: absolute;
  width: 196px;
  height: 192px;
  top: 4px;
  left: 0;
`;

const Image55 = styled.img`
  position: absolute;
  width: 196px;
  height: 192px;
  top: 0;
  left: 0;
`;

export default Group14102222;
