import React from "react";
import styled from "styled-components";
import { BarlowSemiBoldAbbey24px, BarlowMediumGray24px } from "../../styledMixins";


class Group14023 extends React.Component {
  render() {
    return (
      <Group140231>
        <Group src="/img/group-36@2x.svg" />
        <OverlapGroup5>
          <Ellipse15></Ellipse15>
          <Number>1</Number>
        </OverlapGroup5>
        <Number1>2</Number1>
        <Number2>3</Number2>
        <Number3>4</Number3>
        <Text103>....</Text103>
        <Text103>20</Text103>
        <Group1 src="/img/group-37@2x.svg" />
      </Group140231>
    );
  }
}

const Group140231 = styled.div`
  ${BarlowMediumGray24px}
  margin-top: 83px;
  margin-left: 12.28px;
  display: flex;
  align-items: center;
  min-width: 350px;
`;

const Group = styled.img`
  width: 18px;
  height: 14px;
  margin-bottom: 0.79px;
`;

const OverlapGroup5 = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  margin-left: 28px;
  border-radius: 16px;
`;

const Ellipse15 = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 0;
  left: 0;
  background-color: var(--westar);
  border-radius: 16px;
`;

const Number = styled.div`
  ${BarlowSemiBoldAbbey24px}
  position: absolute;
  top: 1px;
  left: 11px;
  letter-spacing: 0;
`;

const Number1 = styled.div`
  min-height: 29px;
  margin-left: 12px;
  margin-bottom: 1px;
  min-width: 14px;
  letter-spacing: 0;
`;

const Number2 = styled.div`
  min-height: 29px;
  margin-left: 24px;
  margin-bottom: 1px;
  min-width: 13px;
  letter-spacing: 0;
`;

const Number3 = styled.div`
  min-height: 29px;
  margin-left: 24px;
  margin-bottom: 1px;
  min-width: 14px;
  letter-spacing: 0;
`;

const Text103 = styled.div`
  min-height: 29px;
  margin-left: 24px;
  margin-bottom: 1px;
  min-width: 27px;
  letter-spacing: 0;
`;

const Group1 = styled.img`
  width: 18px;
  height: 14px;
  margin-left: 40px;
  margin-bottom: 0.79px;
`;

export default Group14023;
