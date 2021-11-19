import React from "react";
import Group13888 from "../Group13888";
import Group13893 from "../Group13893";
import styled from "styled-components";
import {
  BarlowNormalAbbey30px,
  BarlowNormalAbbey28px,
  PlayfairdisplayBoldMineShaft64px,
  PlayfairdisplayBoldMineShaft96px,
} from "../../styledMixins";


class Group14006 extends React.Component {
  render() {
    const { group13893Props, group138882Props2 } = this.props;

    return (
      <Group140061>
        <OverlapGroup2>
          <Text></Text>
          <FlexCol>
            <Impact>Impact</Impact>
            <Group13898>
              <Group13894>
                <Text80>40+</Text80>
                <Group13888 />
                <Text79>
                  <span className="barlow-normal-abbey-30px">persons from marginalised communities </span>
                  <span className="barlow-semi-bold-abbey-30px">released</span>
                  <span className="barlow-normal-abbey-30px"> on rightful bail</span>
                </Text79>
              </Group13894>
              <Group13893 className={group13893Props.className} group13888Props={group13893Props.group13888Props} />
              <Group13892>
                <Text80>2</Text80>
                <Group13888 className={group138882Props2.className} />
                <Text83>
                  <span className="barlow-normal-abbey-30px">Law students from </span>
                  <span className="barlow-semi-bold-abbey-30px">Vimukta &amp; Adivasi </span>
                  <span className="barlow-normal-abbey-30px">communities in Bhopal supported</span>
                </Text83>
              </Group13892>
            </Group13898>
            <Group13897>
              <Text84>
                <span className="barlow-normal-abbey-28px">
                  The Madhya Pradesh High Court issued directions to the police to{" "}
                </span>
                <span className="barlow-semi-bold-abbey-28px">
                  avoid arresting for offences punishable by less than seven years
                </span>
                <span className="barlow-normal-abbey-28px"> as a result of the </span>
                <span className="barlow-semi-bold-abbey-28px">Prison Decongestion PIL</span>
                <span className="barlow-normal-abbey-28px"> filed by the CPA Project</span>
              </Text84>
              <Text85>
                <span className="barlow-normal-abbey-28px">
                  Our study on policing during the pandemic underscored how a public health crisis was transformed into
                  a law and order problem through the
                </span>
                <span className="barlow-semi-bold-abbey-28px"> criminalisation of marginalised communities.</span>
              </Text85>
              <Text86>
                <span className="barlow-normal-abbey-28px">Issues of </span>
                <span className="barlow-semi-bold-abbey-28px">targeting and intrusive surveillance</span>
                <span className="barlow-normal-abbey-28px">
                  {" "}
                  faced by DNT communities in Bhopal highlighted in International and national media.
                </span>
              </Text86>
            </Group13897>
          </FlexCol>
        </OverlapGroup2>
      </Group140061>
    );
  }
}

const Group140061 = styled.div`
  z-index: 8;
  margin-right: -4px;
  display: flex;
  align-items: flex-start;
  min-width: 1924px;
`;

const OverlapGroup2 = styled.div`
  height: 1080px;
  display: flex;
  padding: 117px 196px;
  align-items: flex-start;
  min-width: 1920px;
  background-color: var(--spring-wood-2);
`;

const Text = styled.div`
  min-height: 128px;
  margin-top: 112px;
  min-width: 0;
  font-family: var(--font-family-playfair_display);
  font-weight: 700;
  color: var(--black);
  font-size: 96px;
  letter-spacing: 0;
`;

const FlexCol = styled.div`
  width: 1440px;
  margin-left: 66px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 758px;
`;

const Impact = styled.div`
  ${PlayfairdisplayBoldMineShaft64px}
  min-height: 85px;
  letter-spacing: 0;
`;

const Group13898 = styled.div`
  height: 254px;
  position: relative;
  margin-top: 41px;
  display: flex;
  align-items: flex-start;
  min-width: 1402px;
`;

const Group13894 = styled.div`
  width: 409px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 254px;
`;

const Text80 = styled.div`
  ${PlayfairdisplayBoldMineShaft96px}
  min-height: 128px;
  letter-spacing: 0;
`;

const Text79 = styled.div`
  ${BarlowNormalAbbey30px}
  width: 405px;
  min-height: 108px;
  margin-top: 4px;
  letter-spacing: 0;
`;

const Group13892 = styled.div`
  width: 368px;
  position: relative;
  margin-left: 152px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 254px;
`;

const Text83 = styled.div`
  ${BarlowNormalAbbey30px}
  width: 364px;
  min-height: 108px;
  margin-top: 4px;
  letter-spacing: 0;
`;

const Group13897 = styled.div`
  ${BarlowNormalAbbey28px}
  width: 1440px;
  margin-top: 86px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 292px;
`;

const Text84 = styled.div`
  width: 1396px;
  min-height: 68px;
  letter-spacing: 0;
`;

const Text85 = styled.div`
  width: 1396px;
  min-height: 68px;
  margin-top: 44px;
  letter-spacing: 0;
`;

const Text86 = styled.div`
  width: 1434px;
  min-height: 68px;
  margin-top: 44px;
  letter-spacing: 0;
`;

export default Group14006;
