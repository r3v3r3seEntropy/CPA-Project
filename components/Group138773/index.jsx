import React from "react";
import styled from "styled-components";
import { Border35pxBonJour } from "../../styledMixins";

class Group138773 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeEllipses: 1,
      activeEllipsesList: [],
      inactiveEllipsesList: [],
    };
  }

  myFunction = () => {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 8;
    this.setState({ activeEllipses: Math.ceil(scrolled) });
    const actEllipses = [];
    const inactEllipses = [];
    for (let i = 0; i < this.state.activeEllipses; i++)
      actEllipses.push(<Ellipse8 key={i}></Ellipse8>);
    for (let i = 0; i <(8 - this.state.activeEllipses); i++)
      inactEllipses.push(<Ellipse7 key={i}></Ellipse7>);
    this.setState({ activeEllipsesList: actEllipses });
    this.setState({ inactiveEllipsesList: inactEllipses });
  };

  render() {
    const { className } = this.props;

    window.onscroll = ()=>  this.myFunction();
    

    return (
      <Group13877 className={`group-13877-3 ${className || ""}`}>
        {this.state.activeEllipsesList}
        {this.state.inactiveEllipsesList}
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

const Ellipse7 = styled.div`
  ${Border35pxBonJour}
  width: 17px;
  height: 17px;
  margin-top: 12px;
  border-radius: 8.5px;
`;

const Ellipse8 = styled.div`
  ${Border35pxBonJour}
  background-color: var(--ronchi);
  width: 17px;
  height: 17px;
  margin-top: 12px;
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
