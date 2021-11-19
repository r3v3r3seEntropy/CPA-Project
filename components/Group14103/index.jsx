import React from "react";
import Group13888 from "../Group13888";
import styled from "styled-components";
import { BarlowNormalAbbey20px, PlayfairdisplayBoldMineShaft96px } from "../../styledMixins";


class Group14103 extends React.Component {
  render() {
    const { text64, spanText, spanText2, spanText3, className, group13888Props } = this.props;

    return (
      <Group13893 className={`group-13893 ${className || ""}`}>
        <Text10 className="text-10">{text64}</Text10>
        <Group13888 className={group13888Props.className} />
        <Text9 className="text-9">
          <span className="span0-10 barlow-normal-abbey-20px">{spanText}</span>
          <span className="span1-10 barlow-semi-bold-abbey-20px">{spanText2}</span>
          <span className="span2-5 barlow-normal-abbey-20px">{spanText3}</span>
        </Text9>
      </Group13893>
    );
  }
}

const Group13893 = styled.div`
  width: 268px;
  position: relative;
  align-self: flex-end;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 218px;
`;

const Text10 = styled.div`
  ${PlayfairdisplayBoldMineShaft96px}
  min-height: 128px;
  letter-spacing: 0;
`;

const Text9 = styled.div`
  ${BarlowNormalAbbey20px}
  width: 264px;
  min-height: 72px;
  margin-top: 4px;
  letter-spacing: 0;
`;

export default Group14103;
