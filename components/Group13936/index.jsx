import React from "react";
import styled from "styled-components";
import { BarlowBoldSpringWood20px, BarlowNormalSpringWood18px } from "../../styledMixins";


class Group13936 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Group139361 className={`group-13936 ${className || ""}`}>
        <INNEWS className="in-news">IN NEWS</INNEWS>
        <Group13932 className="group-13932">
          <Place className="place">Media</Place>
          <Publications className="publications">Publications</Publications>
        </Group13932>
      </Group139361>
    );
  }
}

const Group139361 = styled.div`
  width: 99px;
  margin-left: 43px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100px;

  &.group-13936.group-13936-1 {
    margin-left: 38px;
  }

  &.group-13936.group-13936-2 {
    margin-left: 38px;
  }

  &.group-13936.group-13936-3 {
    margin-left: 38px;
  }

  &.group-13936.group-13936-4 {
    margin-left: 38px;
  }
`;

const INNEWS = styled.div`
  ${BarlowBoldSpringWood20px}
  min-height: 24px;
  letter-spacing: 0;
`;

const Group13932 = styled.div`
  ${BarlowNormalSpringWood18px}
  width: 101px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 52px;
`;

const Place = styled.div`
  min-height: 22px;
  letter-spacing: 0;
`;

const Publications = styled.div`
  min-height: 22px;
  margin-top: 8px;
  letter-spacing: 0;
`;

export default Group13936;
