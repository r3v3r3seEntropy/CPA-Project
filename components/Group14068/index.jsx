import React from "react";
import styled from "styled-components";


class Group14068 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Group140681 className={`group-14068 ${className || ""}`}>
        <FinalLogoPng0111 className="final-logopng-01-1-1-1" src="/img/final-logo-png-01--1--1-1@2x.png" />
        <CRIMINALJUSTICEPOLICEACCOUNTABILTYP
          className="criminal-justic-ntabiltyproject"
          src="/img/criminal-justice---police-accountabilty-project@2x.svg"
        />
      </Group140681>
    );
  }
}

const Group140681 = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  min-width: 278px;

  &.group-14068.group-14068-1 {
    margin-top: 36px;
  }
`;

const FinalLogoPng0111 = styled.img`
  width: 105px;
  height: 70px;
`;

const CRIMINALJUSTICEPOLICEACCOUNTABILTYP = styled.img`
  width: 160px;
  height: 45px;
  margin-left: 13px;
  margin-top: 1px;
`;

export default Group14068;
