import React from "react";
import styled from "styled-components";
import { BarlowBoldSpringWood20px, BarlowNormalSpringWood18px } from "../../styledMixins";


class Group13935 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Group139351 className={`group-13935-1 ${className || ""}`}>
        <OURWORK className="our-work-2">OUR WORK</OURWORK>
        <Group13931 className="group-13931-1">
          <Litigation className="litigation-2">Litigation</Litigation>
          <ResearchAdvocacy className="research-advocacy-2">
            Research &amp;
            <br />
            Advocacy
          </ResearchAdvocacy>
          <ResearchAdvocacy className="capacity-building-2">Capacity Building</ResearchAdvocacy>
          <ResearchAdvocacy className="resources-1">Resources</ResearchAdvocacy>
        </Group13931>
      </Group139351>
    );
  }
}

const Group139351 = styled.div`
  width: 170px;
  margin-left: 38px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 160px;

  &.group-13935-1.group-13935-2 {
    margin-left: 41px;
  }

  &.group-13935-1.group-13935-3 {
    margin-left: 41px;
  }

  &.group-13935-1.group-13935-4 {
    margin-left: 41px;
  }
`;

const OURWORK = styled.div`
  ${BarlowBoldSpringWood20px}
  min-height: 24px;
  letter-spacing: 0;
`;

const Group13931 = styled.div`
  ${BarlowNormalSpringWood18px}
  width: 176px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 112px;
`;

const Litigation = styled.div`
  min-height: 22px;
  letter-spacing: 0;
`;

const ResearchAdvocacy = styled.div`
  min-height: 22px;
  margin-top: 8px;
  letter-spacing: 0;
`;

export default Group13935;
