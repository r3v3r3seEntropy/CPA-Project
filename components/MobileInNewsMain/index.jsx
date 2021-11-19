import React from "react";
import Group14078 from "../Group14078";
import Group14083 from "../Group14083";
import Group14102 from "../Group14102";
import Group14063 from "../Group14063";
import Group14098 from "../Group14098";
import Group14100 from "../Group14100";
import Group14101 from "../Group14101";
import styled from "styled-components";
import {
  PlayfairdisplayBoldMineShaft36px,
  BarlowSemiBoldAbbey14px,
  BarlowMediumGray14px,
  PlayfairdisplayBoldAbbey30px,
  BarlowMediumAbbey22px,
  BarlowNormalAbbey14px,
  BarlowMediumGray24px,
} from "../../styledMixins";
import "./MobileInNewsMain.css";

class MobileInNewsMain extends React.Component {
  render() {
    const {
      inNews,
      text7,
      image,
      text1,
      image2,
      image3,
      rectangle53,
      image4,
      image5,
      rectangle532,
      image6,
      image7,
      image8,
      image9,
      image10,
      articles,
      image11,
      number,
      number2,
      number3,
      number4,
      text10,
      number5,
      finalLogo_Png0111,
      discussions,
      image12,
      image13,
      image51,
      image14,
      image48,
      number6,
      number7,
      number8,
      number9,
      text11,
      number10,
      image15,
      rectangle533,
      image56,
      group14083Props,
      group140832Props,
      group140833Props,
      group140834Props,
      group14102Props,
      group14083Props2,
      group140835Props,
      group141022Props,
      group140836Props,
      group14102Props2,
      group14102Props3,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="mobile-in-news-main screen">
          <OverlapGroup14>
            <FlexCol>
              <InNews>{inNews}</InNews>
              <Text128>{text7}</Text128>
              <OverlapGroup15>
                <OverlapGroup1>
                  <Group140831>
                    <OverlapGroup>
                      <Image src={image} />
                      <Group14079>
                        <Text122>{text1}</Text122>
                        <Group14078 />
                      </Group14079>
                    </OverlapGroup>
                  </Group140831>
                  <Image1 src={image2} />
                </OverlapGroup1>
                <OverlapGroup2>
                  <Group14083 text2={group14083Props.text2} group14078Props={group14083Props.group14078Props} />
                  <Image1 src={image3} />
                  <Rectangle53 src={rectangle53} />
                  <Image2 src={image4} />
                </OverlapGroup2>
                <OverlapGroup3>
                  <Group14083 text2={group140832Props.text2} group14078Props={group140832Props.group14078Props} />
                  <Image1 src={image5} />
                  <Rectangle53 src={rectangle532} />
                </OverlapGroup3>
                <OverlapGroup4>
                  <OverlapGroup11>
                    <Group14083 text2={group140833Props.text2} group14078Props={group140833Props.group14078Props} />
                    <Image1 src={image6} />
                  </OverlapGroup11>
                  <Image1 src={image7} />
                  <Image3 src={image8} />
                </OverlapGroup4>
                <OverlapGroup6>
                  <OverlapGroup11>
                    <Group14083 text2={group140834Props.text2} group14078Props={group140834Props.group14078Props} />
                    <Image1 src={image9} />
                  </OverlapGroup11>
                  <Image1 src={image10} />
                </OverlapGroup6>
                <Articles>{articles}</Articles>
                <OverlapGroup7>
                  <OverlapGroup12>
                    <Group14102 group14078Props={group14102Props.group14078Props} />
                    <Image4 src={image11} />
                  </OverlapGroup12>
                  <Image4 src="/img/group-14031@2x.svg" />
                </OverlapGroup7>
                <Vector30 src="/img/vector-30@2x.svg" />
              </OverlapGroup15>
            </FlexCol>
            <FlexRow>
              <Group src="/img/group@2x.svg" />
              <OverlapGroup9>
                <Ellipse15></Ellipse15>
                <Number>{number}</Number>
              </OverlapGroup9>
              <Number1>{number2}</Number1>
              <Number1>{number3}</Number1>
              <Number1>{number4}</Number1>
              <Text131>{text10}</Text131>
              <Number2>{number5}</Number2>
              <Group1 src="/img/group-1@2x.svg" />
            </FlexRow>
          </OverlapGroup14>
          <Rectangle71></Rectangle71>
          <FinalLogoPng0111 src={finalLogo_Png0111} />
          <Group14063 className={group14083Props2.className} />
          <Group140631 src="/img/group-14063@2x.svg" />
          <OverlapGroup13>
            <Discussions>{discussions}</Discussions>
            <OverlapGroup16>
              <OverlapGroup5>
                <OverlapGroup11>
                  <Group14083
                    text2={group140835Props.text2}
                    className={group140835Props.className}
                    group14078Props={group140835Props.group14078Props}
                  />
                  <Image1 src={image12} />
                </OverlapGroup11>
                <Image1 src={image13} />
                <Image51 src={image51} />
              </OverlapGroup5>
              <OverlapGroup8>
                <Group14102 className={group141022Props.className} group14078Props={group141022Props.group14078Props} />
                <Image5 src={image14} />
              </OverlapGroup8>
              <Image48 src={image48} />
              <Group14126>
                <Vector31 src="/img/vector-30@2x.svg" />
                <FlexRow1>
                  <Group src="/img/group@2x.svg" />
                  <OverlapGroup9>
                    <Ellipse15></Ellipse15>
                    <Number>{number6}</Number>
                  </OverlapGroup9>
                  <Number1>{number7}</Number1>
                  <Number1>{number8}</Number1>
                  <Number1>{number9}</Number1>
                  <Text131>{text11}</Text131>
                  <Number2>{number10}</Number2>
                  <Group1 src="/img/group-1@2x.svg" />
                </FlexRow1>
              </Group14126>
              <OverlapGroup10>
                <OverlapGroup11>
                  <Group14083
                    text2={group140836Props.text2}
                    className={group140836Props.className}
                    group14078Props={group140836Props.group14078Props}
                  />
                  <Image1 src={image15} />
                  <Rectangle531 src={rectangle533} />
                </OverlapGroup11>
                <Image2 src={image56} />
              </OverlapGroup10>
            </OverlapGroup16>
          </OverlapGroup13>
          <Group14098 group13909Props={group14102Props2.group13909Props} />
          <Group14100 group14095Props={group14102Props3.group14095Props} />
          <Group14101 />
        </div>
      </div>
    );
  }
}

const OverlapGroup14 = styled.div`
  width: 360px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 72px 11px;
  align-items: center;
  min-height: 1280px;
  background-color: var(--green-white);
`;

const FlexCol = styled.div`
  width: 317px;
  margin-right: 21px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1095px;
`;

const InNews = styled.div`
  ${PlayfairdisplayBoldMineShaft36px}
  min-height: 48px;
  margin-left: 35px;
  letter-spacing: 0;
`;

const Text128 = styled.div`
  ${BarlowMediumAbbey22px}
  width: 264px;
  min-height: 66px;
  align-self: center;
  margin-top: 24px;
  margin-left: 19px;
  letter-spacing: 0;
  line-height: 33px;
`;

const OverlapGroup15 = styled.div`
  width: 317px;
  height: 933px;
  position: relative;
  margin-top: 24px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 301px;
  height: 192px;
  top: 457px;
  left: 0;
`;

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
  width: 288px;
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
  width: 119px;
  top: 47px;
  left: 169px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 90px;
`;

const Text122 = styled.p`
  ${BarlowNormalAbbey14px}
  width: 117px;
  min-height: 68px;
  letter-spacing: 0;
`;

const Image1 = styled.img`
  position: absolute;
  width: 198px;
  height: 192px;
  top: 0;
  left: 0;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 301px;
  height: 192px;
  top: 315px;
  left: 0;
`;

const Rectangle53 = styled.img`
  position: absolute;
  width: 198px;
  height: 192px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Image2 = styled.img`
  position: absolute;
  width: 108px;
  height: 102px;
  top: 41px;
  left: 45px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 301px;
  height: 192px;
  top: 741px;
  left: 0;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 301px;
  height: 192px;
  top: 173px;
  left: 0;
`;

const OverlapGroup11 = styled.div`
  position: absolute;
  width: 301px;
  height: 192px;
  top: 0;
  left: 0;
`;

const Image3 = styled.img`
  position: absolute;
  width: 108px;
  height: 103px;
  top: 40px;
  left: 45px;
`;

const OverlapGroup6 = styled.div`
  position: absolute;
  width: 301px;
  height: 192px;
  top: 599px;
  left: 0;
`;

const Articles = styled.div`
  ${PlayfairdisplayBoldAbbey30px}
  position: absolute;
  top: 0;
  left: 37px;
  letter-spacing: 0;
`;

const OverlapGroup7 = styled.div`
  position: absolute;
  width: 301px;
  height: 194px;
  top: 27px;
  left: 0;
`;

const OverlapGroup12 = styled.div`
  position: absolute;
  width: 301px;
  height: 194px;
  top: 0;
  left: 0;
`;

const Image4 = styled.img`
  position: absolute;
  width: 196px;
  height: 194px;
  top: 0;
  left: 0;
`;

const Vector30 = styled.img`
  position: absolute;
  width: 296px;
  height: 6px;
  top: 922px;
  left: 21px;
`;

const FlexRow = styled.div`
  height: 29px;
  margin-top: 4px;
  margin-right: 0.44px;
  display: flex;
  align-items: center;
  min-width: 214px;
`;

const Group = styled.img`
  width: 18px;
  height: 14px;
  margin-bottom: 0.21px;
`;

const OverlapGroup9 = styled.div`
  width: 28px;
  height: 28px;
  position: relative;
  align-self: flex-end;
  margin-left: 12px;
  border-radius: 14px;
`;

const Ellipse15 = styled.div`
  position: absolute;
  width: 28px;
  height: 28px;
  top: 0;
  left: 0;
  background-color: var(--westar);
  border-radius: 14px;
`;

const Number = styled.div`
  ${BarlowSemiBoldAbbey14px}
  position: absolute;
  top: 6px;
  left: 11px;
  letter-spacing: 0;
`;

const Number1 = styled.div`
  ${BarlowMediumGray14px}
  min-height: 17px;
  margin-left: 12px;
  margin-top: 2px;
  min-width: 8px;
  letter-spacing: 0;
`;

const Text131 = styled.div`
  ${BarlowMediumGray24px}
  min-height: 29px;
  margin-left: 12px;
  min-width: 27px;
  letter-spacing: 0;
`;

const Number2 = styled.div`
  ${BarlowMediumGray14px}
  min-height: 17px;
  margin-left: 12px;
  margin-top: 2px;
  min-width: 16px;
  letter-spacing: 0;
`;

const Group1 = styled.img`
  width: 18px;
  height: 14px;
  margin-left: 12px;
  margin-top: 0.21px;
`;

const Rectangle71 = styled.div`
  position: fixed;
  width: 360px;
  height: 48px;
  top: 0;
  left: 0;
  z-index: 6;
  background-color: var(--alabaster);
  box-shadow: 0px 0px 45px #3333330d;
`;

const FinalLogoPng0111 = styled.img`
  position: fixed;
  width: 101px;
  height: 26px;
  top: 11px;
  left: 20px;
  z-index: 7;
  object-fit: cover;
`;

const Group140631 = styled.img`
  position: fixed;
  width: 23px;
  height: 19px;
  top: 15px;
  left: 316px;
  z-index: 8;
`;

const OverlapGroup13 = styled.div`
  width: 360px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 37px 11px;
  align-items: flex-start;
  min-height: 624px;
  background-color: var(--spring-wood-2);
`;

const Discussions = styled.div`
  ${PlayfairdisplayBoldAbbey30px}
  min-height: 40px;
  margin-top: 11px;
  margin-left: 37px;
  letter-spacing: 0;
`;

const OverlapGroup16 = styled.div`
  width: 324px;
  height: 475px;
  position: relative;
  margin-top: 24px;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 301px;
  height: 192px;
  top: 109px;
  left: 0;
`;

const Image51 = styled.img`
  position: absolute;
  width: 108px;
  height: 103px;
  top: 41px;
  left: 45px;
`;

const OverlapGroup8 = styled.div`
  position: absolute;
  width: 264px;
  height: 118px;
  top: 0;
  left: 37px;
  border-radius: 5px;
`;

const Image5 = styled.img`
  position: absolute;
  width: 106px;
  height: 104px;
  top: 8px;
  left: 8px;
`;

const Image48 = styled.img`
  position: absolute;
  width: 106px;
  height: 104px;
  top: 8px;
  left: 45px;
`;

const Group14126 = styled.div`
  position: absolute;
  width: 300px;
  top: 434px;
  left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 41px;
`;

const Vector31 = styled.img`
  width: 296px;
  height: 6px;
  margin-top: -3px;
  margin-left: -3px;
`;

const FlexRow1 = styled.div`
  height: 29px;
  align-self: center;
  margin-top: 9px;
  margin-right: 10.44px;
  display: flex;
  align-items: center;
  min-width: 214px;
`;

const OverlapGroup10 = styled.div`
  position: absolute;
  width: 301px;
  height: 192px;
  top: 251px;
  left: 0;
`;

const Rectangle531 = styled.img`
  position: absolute;
  width: 108px;
  height: 102px;
  top: 41px;
  left: 45px;
  object-fit: cover;
`;

export default MobileInNewsMain;
