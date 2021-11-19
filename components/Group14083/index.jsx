import React from "react";
import Group14078 from "../Group14078";
import styled from "styled-components";
import { BarlowNormalAbbey13px } from "../../styledMixins";


class Group14083 extends React.Component {
  render() {
    const { text2, className, group14078Props } = this.props;

    return (
      <Group140831 className={`group-14083-1 ${className || ""}`}>
        <OverlapGroup className="overlap-group-3">
          <Image className="image-11" src="/img/image-25@2x.png" />
          <Group14079 className="group-14079-4">
            <Text19 className="text-19">{text2}</Text19>
            <Group14078 className={group14078Props.className} />
          </Group14079>
        </OverlapGroup>
      </Group140831>
    );
  }
}

const Group140831 = styled.div`
  position: absolute;
  height: 118px;
  top: 33px;
  left: 37px;
  display: flex;
  align-items: flex-start;
  min-width: 264px;
  background-color: var(--spring-wood-2);
  border-radius: 5px;
  box-shadow: 0px 4px 45px #00000009;
`;

const OverlapGroup = styled.div`
  width: 293px;
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

const Group14079 = styled.div`
  position: absolute;
  width: 124px;
  top: 49px;
  left: 169px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 86px;
`;

const Text19 = styled.p`
  ${BarlowNormalAbbey13px}
  width: 122px;
  min-height: 64px;
  letter-spacing: 0;
`;

const Text126 = styled.p`
  ${BarlowNormalAbbey13px}

  .group-14083-1.group-14083-3  & {
    min-height: 48px;
  }
`;

const Text133 = styled.p`
  ${BarlowNormalAbbey13px}

  .group-14083-1.group-14083-4  & {
    min-height: 48px;
  }
`;

export default Group14083;
