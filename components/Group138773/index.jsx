import React from "react";
import styled from "styled-components";
import { Border35pxBonJour } from "../../styledMixins";


class Group138773 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Group13877 className={`group-13877-3 ${className || ""}`}>
        <Rectangle42 className="rectangle-42-1"></Rectangle42>
        <Ellipse7 className="ellipse-7-1"></Ellipse7>
        <Ellipse8 className="ellipse-8-1"></Ellipse8>
        <Ellipse8 className="ellipse-9-1"></Ellipse8>
        <Ellipse8 className="ellipse-10-1"></Ellipse8>
        <Ellipse11 className="ellipse-11-1"></Ellipse11>
        <Ellipse11 className="ellipse-12-3"></Ellipse11>
        <Ellipse13 className="ellipse-13-1"></Ellipse13>
      </Group13877>
    );
  }
}

const Group13877 = styled.div`
  position: fixed;
  width: 23px;
  top: 467px;
  left: 1797px;
  z-index: 23;
  display: flex;
  flex-direction: column;
  padding: 0 2.5px;
  align-items: flex-start;
  min-height: 205px;

  &.group-13877-3.group-13877-4 {
    z-index: 16;
  }
`;

const Rectangle42 = styled.div`
  width: 16px;
  height: 16px;
  margin-top: 3px;
  margin-left: 0.81px;
  background-color: var(--ronchi);
  border-radius: 2px;
  transform: rotate(-45deg);
`;

const Ellipse7 = styled.div`
  ${Border35pxBonJour}
  width: 17px;
  height: 17px;
  margin-top: 12px;
  border-radius: 8.5px;
`;

const Ellipse8 = styled.div`
  ${Border35pxBonJour}
  width: 17px;
  height: 17px;
  margin-top: 9px;
  border-radius: 8.5px;
`;

const Ellipse11 = styled.div`
  ${Border35pxBonJour}
  width: 17px;
  height: 17px;
  margin-top: 9px;
  margin-left: 0;
  border-radius: 8.5px;
`;

const Ellipse13 = styled.div`
  ${Border35pxBonJour}
  width: 17px;
  height: 17px;
  margin-top: 13px;
  margin-left: 0;
  border-radius: 8.5px;
`;

export default Group138773;
