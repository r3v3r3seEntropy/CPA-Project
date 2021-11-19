import React from "react";
import Group14079 from "../Group14079";
import styled from "styled-components";


class Group141025 extends React.Component {
  render() {
    const { className, group14079Props } = this.props;

    return (
      <Group14102 className={`group-14102-6 ${className || ""}`}>
        <OverlapGroup className="overlap-group-25">
          <Image className="image-63" src="/img/image-25@2x.png" />
          <Group14079 text68={group14079Props.text68} group14078Props={group14079Props.group14078Props} />
        </OverlapGroup>
      </Group14102>
    );
  }
}

const Group14102 = styled.div`
  position: absolute;
  height: 118px;
  top: 37px;
  left: 37px;
  display: flex;
  align-items: flex-start;
  min-width: 264px;
  background-color: var(--spring-wood-2);
  border-radius: 5px;
  box-shadow: 0px 0px 45px #00000014;

  &.group-14102-6.group-14102-7 {
    top: 712px;
    left: 49px;
  }

  &.group-14102-6.group-14102-8 {
    top: 1500px;
    left: 49px;
  }
`;

const OverlapGroup = styled.div`
  width: 298px;
  height: 192px;
  position: relative;
  margin-left: -37px;
  margin-top: -33px;
`;

const Image = styled.img`
  position: absolute;
  width: 196px;
  height: 192px;
  top: 0;
  left: 0;
`;

export default Group141025;
