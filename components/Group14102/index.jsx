import React from "react";
import Group14078 from "../Group14078";
import styled from "styled-components";
import { BarlowNormalAbbey14px } from "../../styledMixins";


class Group14102 extends React.Component {
  render() {
    const { className, group14078Props } = this.props;

    return (
      <Group141021 className={`group-14102-1 ${className || ""}`}>
        <OverlapGroup className="overlap-group-20">
          <Image className="image-54" src="/img/image-25@2x.png" />
          <Group14079 className="group-14079-6">
            <Text129 className="text-129">
              Drunk on Power:
              <br />
              Explainer Video
            </Text129>
            <Group14078 className={group14078Props.className} />
          </Group14079>
        </OverlapGroup>
      </Group141021>
    );
  }
}

const Group141021 = styled.div`
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

  &.group-14102-1.group-14102-2 {
    top: 0;
    left: 0;
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

const Group14079 = styled.div`
  position: absolute;
  width: 129px;
  top: 62px;
  left: 169px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 67px;
`;

const Text129 = styled.div`
  ${BarlowNormalAbbey14px}
  width: 127px;
  min-height: 34px;
  letter-spacing: 0;
`;

export default Group14102;
