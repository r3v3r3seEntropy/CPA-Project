import React from "react";
import styled from "styled-components";
import { Border35pxBonJour } from "../../styledMixins";


class Group13877 extends React.Component {
  
  render() {
    {/*const { className } = this.props;
    */}
 const ellipses=[]
 const rectangles=[]
 for(let i=0;i<4;i++)
 rectangles.push( <Rectangle42 className="rectangle-42"></Rectangle42>)
 for(let i=0;i<4;i++)
 ellipses.push(<Ellipse7 className="ellipse-7"></Ellipse7>)

    return (
      <Group138771 className={`group-13877 ${className || ""}`}>
       
        {rectangles}
        {ellipses}
      </Group138771>
    );
  }
}

const Group138771 = styled.div`
  position: fixed;
  width: 12px;
  top: 264px;
  left: 331px;
  z-index: 17;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 113px;

  &.group-13877.group-13877-1 {
    top: 312px;
    z-index: 13;
  }

  &.group-13877.group-13877-2 {
    z-index: 8;
  }
`;

const Rectangle42 = styled.div`
  width: 9px;
  height: 9px;
  margin-top: 2px;
  margin-left: 1.83px;
  background-color: var(--ronchi);
  border-radius: 2px;
  transform: rotate(-45deg);
`;

const Ellipse7 = styled.div`
  ${Border35pxBonJour}
  width: 13px;
  height: 13px;
  margin-top: 5px;
  margin-left: -0.19px;
  border-radius: 6.26px;
`;

const Ellipse8 = styled.div`
  ${Border35pxBonJour}
  width: 13px;
  height: 13px;
  margin-top: 2px;
  margin-left: -0.19px;
  border-radius: 6.26px;
`;

const Ellipse13 = styled.div`
  ${Border35pxBonJour}
  width: 13px;
  height: 13px;
  margin-top: 4px;
  margin-left: -0.19px;
  border-radius: 6.26px;
`;

export default Group13877;
