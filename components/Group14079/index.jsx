import React from "react";
import Group14078 from "../Group14078";
import styled from "styled-components";
import { BarlowSemiBoldAbbey14px } from "../../styledMixins";


class Group14079 extends React.Component {
  render() {
    const { text68, className, group14078Props } = this.props;

    return (
      <Group140791 className={`group-14079-9 ${className || ""}`}>
        <Text148 className="text-148">{text68}</Text148>
        <Group14078 className={group14078Props.className} />
      </Group140791>
    );
  }
}

const Group140791 = styled.div`
  position: absolute;
  width: 129px;
  top: 47px;
  left: 169px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 90px;

  &.group-14079-9.group-14079-11 {
    top: 51px;
  }

  &.group-14079-9.group-14079-12 {
    top: 51px;
  }
`;

const Text148 = styled.p`
  ${BarlowSemiBoldAbbey14px}
  width: 127px;
  min-height: 68px;
  letter-spacing: 0;
`;

const Text161 = styled.div`
  ${BarlowSemiBoldAbbey14px}

  .group-14079-9.group-14079-11  & {
    min-height: 51px;
  }
`;

const Text162 = styled.div`
  ${BarlowSemiBoldAbbey14px}

  .group-14079-9.group-14079-12  & {
    min-height: 51px;
  }
`;

export default Group14079;
