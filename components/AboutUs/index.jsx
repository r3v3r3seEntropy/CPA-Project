import React from "react";
import { Link } from "react-router-dom";
import Group138773 from "../Group138773";
import Group138882 from "../Group138882";
import Group13921 from "../Group13921";
import Group13919 from "../Group13919";
import Group14013 from "../Group14013";
import Group13935 from "../Group13935";
import Group13936 from "../Group13936";
import Group13937 from "../Group13937";
import styled from "styled-components";
import {
  BarlowMediumAbbey24px,
  PlayfairdisplayBoldWhite48px,
  BarlowBoldSpringWood20px,
  PlayfairdisplayBoldWhite64px,
  BarlowNormalAbbey18px,
  BarlowNormalSpringWood18px,
  BarlowNormalAbbey30px,
  PlayfairdisplayBoldAbbey64px,
  Border5pxMineShaft,
  PlayfairdisplayBoldMineShaft24px,
  BarlowMediumSpringWood20px,
  PlayfairdisplayBoldMineShaft64px,
  BarlowMediumMineShaft20px,
  BarlowMediumAbbey30px,
  Border2pxMistGray,
  BarlowSemiBoldSpringWood18px,
} from "../../styledMixins";
import "./AboutUs.css";

class AboutUs extends React.Component {
  render() {
    const {
      aboutUs,
      spanText,
      spanText2,
      spanText3,
      finalLogo_Png0111,
      finalLogo_Png01112,
      place,
      aboutUs2,
      ourWork,
      inNews,
      supportUs,
      image,
      d10E4360684B11EaA6Ac9122541Af2041,
      spanText4,
      spanText5,
      text33,
      image2,
      image3,
      image4,
      ourTeam,
      text36,
      spanText6,
      spanText7,
      image5,
      nikitaSonavane,
      text37,
      image6,
      sanjanaMeshram,
      text38,
      image7,
      aditiPradhan,
      text39,
      image8,
      harshKinger,
      text40,
      untitledDesign41,
      workWithUs,
      text41,
      aboutUs3,
      ourIdeology,
      ourBeginings,
      ourTeam2,
      spanText8,
      spanText9,
      text43,
      group13921Props,
      group138882Props,
      group13919Props,
      group13936Props,
      group13937Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="about-us barlow-medium-mine-shaft-20px screen">
          <OverlapGroup10>
            <Group13981 className="animated fadeInLeft ease-out-circ d2 a-1">
              <AboutUs1>{aboutUs}</AboutUs1>
              <Text31>
                <span className="barlow-medium-abbey-24px">{spanText}</span>
                <span className="barlow-bold-abbey-24px">{spanText2}</span>
                <span className="barlow-medium-abbey-24px">{spanText3}</span>
              </Text31>
            </Group13981>
            <Group13941>
              <FinalLogoPng0111 src={finalLogo_Png0111} />
              <CRIMINALJUSTICEPOLICEACCOUNTABILTYP src="/img/123.png" />
            </Group13941>
          </OverlapGroup10>
          <Rectangle33></Rectangle33>
          <FinalLogoPng01111 src={finalLogo_Png01112} />
          <Rectangle41></Rectangle41>
          <Link to="/homepage-main-1">
            <Place>{place}</Place>
          </Link>
          <Group138773/>
          <AboutUs2>{aboutUs2}</AboutUs2>
          <Link to="/our-work-main">
            <OurWork>{ourWork}</OurWork>
          </Link>
          <Link to="/in-news">
            <InNews>{inNews}</InNews>
          </Link>
          <SupportUs>{supportUs}</SupportUs>
          <Group src="/img/group-14@2x.svg" />
          <Vector17 src="/img/vector-17@2x.svg" />
          <OverlapGroup7>
            <Rectangle34></Rectangle34>
            <Rectangle63></Rectangle63>
            <Image src={image} />
            <D10e4360684b11eaA6ac9122541af2041 src={d10E4360684B11EaA6Ac9122541Af2041} />
            <Rectangle48></Rectangle48>
            <Text32>
              <span className="playfairdisplay-bold-abbey-30px">{spanText4}</span>
              <span className="barlow-normal-abbey-30px">{spanText5}</span>
            </Text32>
            <Text33>{text33}</Text33>
            <MaskGroup src="/img/mask-group@1x.svg" />
            <Group13977>
              <OverlapGroup1>
                <MaskGroup1 src="/img/mask-group-1@2x.svg" />
                <Vector27 src="/img/vector-27@2x.svg" />
              </OverlapGroup1>
            </Group13977>
            {/*<Group1>
              <OverlapGroup2>
                <Image1 src={image2} />
                <Image2 src={image3} />
                <Image3 src={image4} />
              </OverlapGroup2>
            </Group1>*/}
            <Vector28 src="/img/vector-28@1x.svg" />
            <Ellipse18></Ellipse18>
            <Ellipse19></Ellipse19>
            <Group13990>
              <OurTeam>{ourTeam}</OurTeam>
              <Group138882 />
            </Group13990>
            <Group13980>
              <Group13979>
                <Text36>{text36}</Text36>
                <Group138882 />
              </Group13979>
              <Text35>
                <span className="playfairdisplay-bold-white-48px">{spanText6}</span>
                <span className="barlow-medium-white-48px">{spanText7}</span>
              </Text35>
            </Group13980>
            <Group13994 src="/img/group-13994@2x.svg" />
            <OverlapGroup3>
              <Group13986>
                <Image4 src={image5} />
                <Group13982>
                  <NikitaSonavane>{nikitaSonavane}</NikitaSonavane>
                  <Text37>{text37}</Text37>
                </Group13982>
              </Group13986>
              <Group13993 src="/img/group-13993@2x.svg" />
            </OverlapGroup3>
            <Group13987>
              <Image5 src={image6} />
              <Group13983>
                <SanjanaMeshram>{sanjanaMeshram}</SanjanaMeshram>
                <Text38>{text38}</Text38>
              </Group13983>
            </Group13987>
            <OverlapGroup4>
              <Group13986>
                <Image5 src={image7} />
                <Group13984>
                  <AditiPradhan>{aditiPradhan}</AditiPradhan>
                  <Text39>{text39}</Text39>
                </Group13984>
              </Group13986>
              <Group13995 src="/img/group-13994@2x.svg" />
            </OverlapGroup4>
            <OverlapGroup5>
              <OverlapGroup>
                <Rectangle66></Rectangle66>
                <Image6 src={image8} />
                <Group13985>
                  <HarshKinger>{harshKinger}</HarshKinger>
                  <Text39>{text40}</Text39>
                </Group13985>
              </OverlapGroup>
              <Group13996 src="/img/group-13994@2x.svg" />
            </OverlapGroup5>
          </OverlapGroup7>
          <OverlapGroup8>
            <UntitledDesign41 src={untitledDesign41} />
            <Group13921
              group13919Props={group13921Props.group13919Props}
              group13919Props2={group13921Props.group13919Props2}
            />
          </OverlapGroup8>
          <OverlapGroup12>
            <OverlapGroup6>
              <WorkWithUs>{workWithUs}</WorkWithUs>
              <Group138882 className={group138882Props.className} />
            </OverlapGroup6>
            <Group13922>
              <Text41>{text41}</Text41>
              <Group13919 supportUs={group13919Props.supportUs} group13909Props={group13919Props.group13909Props} />
            </Group13922>
          </OverlapGroup12>
          <OverlapGroup9>
            <Group14013 />
            <Group13939>
              <Group13934>
                <ABOUTUS>{aboutUs3}</ABOUTUS>
                <Group13930>
                  <OurIdeology>{ourIdeology}</OurIdeology>
                  <OurBeginings>{ourBeginings}</OurBeginings>
                  <OurBeginings>{ourTeam2}</OurBeginings>
                </Group13930>
              </Group13934>
              <Group13935 />
              <Group13936 className={group13936Props.className} />
              <Group13937 className={group13937Props.className} />
            </Group13939>
            <FlexCol>
              <Group13938 src="/img/group-13938@2x.svg" />
              <Text42>
                <span className="barlow-semi-bold-spring-wood-18px">{spanText8}</span>
                <span className="barlow-normal-spring-wood-18px">{spanText9}</span>
              </Text42>
            </FlexCol>
          </OverlapGroup9>
          <OverlapGroup11>
            <OverlapGroup61>
              <C src="/img/c@2x.svg" />
              <Ellipse17></Ellipse17>
            </OverlapGroup61>
            <Text43>{text43}</Text43>
          </OverlapGroup11>
        </div>
      </div>
    );
  }
}

const OverlapGroup10 = styled.div`
  height: 1080px;
  z-index: 2;
  display: flex;
  padding: 313px 254px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1920px;
  background-color: var(--spring-wood-2);
`;

const Group13981 = styled.div`
  width: 712px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 417px;
`;

const AboutUs1 = styled.div`
  ${PlayfairdisplayBoldMineShaft64px}
  min-height: 66px;
  letter-spacing: 0;
  line-height: 65.9px;
  white-space: nowrap;
`;

const Text31 = styled.div`
  ${BarlowMediumAbbey24px}
  width: 594px;
  min-height: 319px;
  margin-top: 32px;
  letter-spacing: 0;
`;

const Group13941 = styled.div`
  align-self: center;
  margin-left: 6px;
  margin-top: 62px;
  display: flex;
  align-items: center;
  min-width: 686px;
`;

const FinalLogoPng0111 = styled.img`
  width: 257px;
  height: 168px;
`;

const CRIMINALJUSTICEPOLICEACCOUNTABILTYP = styled.img`
  width: 420px;
  height: 120px;
  margin-left: 9px;
  margin-top: 4px;
`;

const Rectangle33 = styled.div`
  position: fixed;
  width: 1920px;
  height: 100px;
  top: 0;
  left: 0;
  z-index: 7;
  background-color: var(--alabaster);
  box-shadow: 0px 0px 45px #3333330d;
`;

const FinalLogoPng01111 = styled.img`
  position: fixed;
  width: 187px;
  height: 50px;
  top: 25px;
  left: 120px;
  z-index: 15;
  object-fit: cover;
`;

const Rectangle41 = styled.div`
  position: fixed;
  width: 44px;
  height: 44px;
  top: 28px;
  left: 1720px;
  z-index: 13;
  background-color: var(--green-white);
  border-radius: 150px;
`;

const Place = styled.div`
  ${BarlowMediumMineShaft20px}
  position: fixed;
  top: 38px;
  left: 1126px;
  z-index: 8;
  letter-spacing: 0;
  cursor: pointer;
`;

const AboutUs2 = styled.div`
  position: fixed;
  top: 38px;
  left: 1226px;
  z-index: 9;
  letter-spacing: 0;
`;

const OurWork = styled.div`
  ${BarlowMediumMineShaft20px}
  position: fixed;
  top: 38px;
  left: 1354px;
  z-index: 10;
  letter-spacing: 0;
  cursor: pointer;
`;

const InNews = styled.div`
  ${BarlowMediumMineShaft20px}
  position: fixed;
  top: 38px;
  left: 1482px;
  z-index: 11;
  letter-spacing: 0;
  cursor: pointer;
`;

const SupportUs = styled.div`
  position: fixed;
  top: 38px;
  left: 1598px;
  z-index: 12;
  letter-spacing: 0;
`;

const Group = styled.img`
  position: fixed;
  width: 24px;
  height: 23px;
  top: 38px;
  left: 1730px;
  z-index: 14;
`;

const Vector17 = styled.img`
  position: fixed;
  width: 70px;
  height: 4px;
  top: 62px;
  left: 1224px;
  z-index: 16;
`;

const OverlapGroup7 = styled.div`
  width: 1920px;
  height: 3240px;
  z-index: 1;
  position: relative;
  margin-right: -0.43px;
`;

const Rectangle34 = styled.div`
  position: absolute;
  width: 1920px;
  height: 1080px;
  top: 2160px;
  left: 0;
  background-color: var(--spring-wood-2);
`;

const Rectangle63 = styled.div`
  position: absolute;
  width: 1920px;
  height: 2160px;
  top: 0;
  left: 0;
  background-color: var(--green-white);
`;

const Image = styled.img`
  position: absolute;
  width: 1010px;
  height: 1040px;
  top: 1378px;
  left: 738px;
`;

const D10e4360684b11eaA6ac9122541af2041 = styled.img`
  position: absolute;
  width: 1920px;
  height: 1171px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Rectangle48 = styled.div`
  position: absolute;
  width: 858px;
  height: 1171px;
  top: 0;
  left: 924px;
  background-color: var(--cod-gray);
  backdrop-filter: blur(10px) brightness(100%);
  -webkit-backdrop-filter: blur(10px) brightness(100%);
`;

const Text32 = styled.div`
  ${PlayfairdisplayBoldAbbey64px}
  position: absolute;
  width: 622px;
  top: 1506px;
  left: 270px;
  letter-spacing: 0;
  font-size:30px;
`;

const Text33 = styled.div`
  ${BarlowNormalAbbey30px}
  position: absolute;
  top: 2997px;
  left: 268px;
  letter-spacing: 0;
`;

const MaskGroup = styled.img`
  position: absolute;
  width: 710px;
  height: 743px;
  top: 1417px;
  left: 1210px;
`;

const Group13977 = styled.div`
  position: absolute;
  height: 451px;
  top: 1721px;
  left: 1054px;
  display: flex;
  align-items: flex-start;
  min-width: 291px;
  transform: rotate(0.6deg);
`;

const OverlapGroup1 = styled.div`
  width: 301px;
  height: 463px;
  position: relative;
  margin-left: -5px;
  margin-top: -5.94px;
`;

const MaskGroup1 = styled.img`
  position: absolute;
  width: 296px;
  height: 455px;
  top: 4px;
  left: 2px;
  transform: rotate(-0.6deg);
`;

const Vector27 = styled.img`
  position: absolute;
  width: 296px;
  height: 460px;
  top: 2px;
  left: 2px;
  transform: rotate(-0.6deg);
`;

const Group1 = styled.div`
  position: absolute;
  height: 439px;
  top: 1291px;
  left: 1068px;
  display: flex;
  align-items: flex-start;
  min-width: 754px;
  transform: rotate(-15deg);
  opacity: 0.15;
`;

const OverlapGroup2 = styled.div`
  width: 962px;
  height: 810px;
  position: relative;
  margin-left: -104px;
  margin-top: -184.93px;
`;

const Image1 = styled.img`
  position: absolute;
  width: 822px;
  height: 592px;
  top: 111px;
  left: 63px;
  transform: rotate(15deg);
  object-fit: cover;
`;

const Image2 = styled.img`
  position: absolute;
  width: 822px;
  height: 592px;
  top: 121px;
  left: 63px;
  transform: rotate(15deg);
  object-fit: cover;
`;

const Image3 = styled.img`
  position: absolute;
  width: 822px;
  height: 591px;
  top: 96px;
  left: 78px;
  transform: rotate(15deg);
  object-fit: cover;
`;

const Vector28 = styled.img`
  position: absolute;
  width: 1344px;
  height: 701px;
  top: 780px;
  left: 273px;
`;

const Ellipse18 = styled.div`
  ${Border5pxMineShaft}
  position: absolute;
  width: 32px;
  height: 32px;
  top: 752px;
  left: 1550px;
  background-color: var(--mist-gray);
  border-radius: 16px;
`;

const Ellipse19 = styled.div`
  ${Border5pxMineShaft}
  position: absolute;
  width: 24px;
  height: 24px;
  top: 1482px;
  left: 254px;
  background-color: var(--mist-gray);
  border-radius: 12px;
`;

const Group13990 = styled.div`
  position: absolute;
  width: 710px;
  top: 2367px;
  left: 263px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 84px;
`;

const OurTeam = styled.div`
  ${PlayfairdisplayBoldMineShaft64px}
  min-height: 66px;
  margin-left: 0;
  letter-spacing: 0;
  line-height: 65.9px;
  white-space: nowrap;
`;

const Text36 = styled.div`
  ${PlayfairdisplayBoldWhite64px}
  min-height: 66px;
  margin-left: 0;
  letter-spacing: 0;
  line-height: 65.9px;
  white-space: nowrap;
`;

const Group13980 = styled.div`
  position: absolute;
  width: 745px;
  top: 402px;
  left: 970px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 368px;
`;

const Group13979 = styled.div`
  width: 745px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 84px;
`;

const Text35 = styled.div`
  ${PlayfairdisplayBoldWhite48px}
  width: 678px;
  min-height: 260px;
  margin-top: 24px;
  letter-spacing: 0;
  font-size: 24px;
`;

const Group13994 = styled.img`
  position: absolute;
  width: 20px;
  height: 109px;
  top: 2509px;
  left: 909px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 324px;
  height: 434px;
  top: 2507px;
  left: 263px;
  border-radius: 5px;
`;

const Group13986 = styled.div`
  position: absolute;
  width: 324px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 434px;
  background-color: var(--alabaster);
  border-radius: 5px;
  box-shadow: 0px 4px 45px #0000001a;
`;

const Image4 = styled.img`
  width: 324px;
  height: 324px;
`;

const Group13982 = styled.div`
  width: 250px;
  margin-top: 25px;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 55px;
`;

const NikitaSonavane = styled.div`
  ${PlayfairdisplayBoldMineShaft24px}
  min-height: 25px;
  margin-right: 3px;
  min-width: 179px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24.7px;
  white-space: nowrap;
`;

const Text37 = styled.div`
  ${BarlowNormalAbbey18px}
  min-height: 22px;
  margin-top: 8px;
  margin-right: 4px;
  min-width: 246px;
  letter-spacing: 0;
`;

const Group13993 = styled.img`
  position: absolute;
  width: 20px;
  height: 109px;
  top: 108px;
  left: 289px;
`;

const Group13987 = styled.div`
  position: absolute;
  width: 324px;
  top: 2507px;
  left: 627px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 434px;
  background-color: var(--alabaster);
  border-radius: 5px;
  box-shadow: 0px 4px 45px #0000001a;
`;

const Image5 = styled.img`
  width: 324px;
  height: 324px;
  object-fit: cover;
`;

const Group13983 = styled.div`
  width: 234px;
  margin-top: 25px;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 55px;
`;

const SanjanaMeshram = styled.div`
  ${PlayfairdisplayBoldMineShaft24px}
  min-height: 25px;
  margin-right: 3px;
  min-width: 199px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24.7px;
  white-space: nowrap;
`;

const Text38 = styled.div`
  ${BarlowNormalAbbey18px}
  min-height: 22px;
  margin-top: 8px;
  margin-right: 4px;
  min-width: 230px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 324px;
  height: 434px;
  top: 2507px;
  left: 991px;
  border-radius: 5px;
`;

const Group13984 = styled.div`
  width: 242px;
  margin-top: 25px;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 55px;
`;

const AditiPradhan = styled.div`
  ${PlayfairdisplayBoldMineShaft24px}
  min-height: 25px;
  margin-right: 3px;
  min-width: 155px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24.7px;
  white-space: nowrap;
`;

const Text39 = styled.div`
  ${BarlowNormalAbbey18px}
  min-height: 22px;
  margin-top: 8px;
  margin-right: 4px;
  min-width: 238px;
  text-align: center;
  letter-spacing: 0;
`;

const Group13995 = styled.img`
  position: absolute;
  width: 20px;
  height: 109px;
  top: 108px;
  left: 286px;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 325px;
  height: 434px;
  top: 2507px;
  left: 1355px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 325px;
  height: 434px;
  top: 0;
  left: 0;
`;

const Rectangle66 = styled.div`
  position: absolute;
  width: 324px;
  height: 434px;
  top: 0;
  left: 0;
  background-color: var(--alabaster);
  border-radius: 5px;
  box-shadow: 0px 4px 45px #0000001a;
`;

const Image6 = styled.img`
  position: absolute;
  width: 324px;
  height: 324px;
  top: 0;
  left: 1px;
  object-fit: cover;
`;

const Group13985 = styled.div`
  position: absolute;
  width: 242px;
  top: 349px;
  left: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 55px;
`;

const HarshKinger = styled.div`
  ${PlayfairdisplayBoldMineShaft24px}
  min-height: 25px;
  margin-right: 4px;
  min-width: 150px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24.7px;
  white-space: nowrap;
`;

const Group13996 = styled.img`
  position: absolute;
  width: 20px;
  height: 109px;
  top: 108px;
  left: 290px;
`;

const OverlapGroup8 = styled.div`
  height: 675px;
  z-index: 3;
  position: relative;
  display: flex;
  padding: 145px 240px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1920px;
  background-color: var(--green-white);
`;

const UntitledDesign41 = styled.img`
  width: 454px;
  height: 376px;
  margin-top: 1px;
`;

const OverlapGroup12 = styled.div`
  width: 1920px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  padding: 145px 262px;
  align-items: flex-start;
  min-height: 675px;
  background-color: var(--spring-wood-2);
`;

const OverlapGroup6 = styled.div`
  width: 388px;
  height: 90px;
  position: relative;
  margin-top: 1px;
`;

const WorkWithUs = styled.div`
  ${PlayfairdisplayBoldMineShaft64px}
  position: absolute;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const Group13922 = styled.div`
  width: 690px;
  position: relative;
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 238px;
`;

const Text41 = styled.div`
  ${BarlowMediumAbbey30px}
  width: 688px;
  min-height: 180px;
  letter-spacing: 0;
`;

const OverlapGroup9 = styled.div`
  height: 409px;
  z-index: 5;
  position: relative;
  display: flex;
  padding: 124px 262px;
  align-items: flex-start;
  min-width: 1920px;
  background-color: var(--armadillo);
`;

const Group13939 = styled.div`
  height: 160px;
  position: relative;
  align-self: flex-end;
  margin-left: 121px;
  display: flex;
  align-items: flex-start;
  min-width: 607px;
`;

const Group13934 = styled.div`
  width: 111px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 130px;
`;

const ABOUTUS = styled.div`
  ${BarlowBoldSpringWood20px}
  min-height: 24px;
  letter-spacing: 0;
`;

const Group13930 = styled.div`
  ${BarlowNormalSpringWood18px}
  width: 115px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 82px;
`;

const OurIdeology = styled.div`
  min-height: 22px;
  letter-spacing: 0;
`;

const OurBeginings = styled.div`
  min-height: 22px;
  margin-top: 8px;
  letter-spacing: 0;
`;

const FlexCol = styled.div`
  width: 153px;
  margin-left: 90px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 89px;
`;

const Group13938 = styled.img`
  width: 149px;
  height: 22px;
`;

const Text42 = styled.div`
  ${BarlowSemiBoldSpringWood18px}
  min-height: 44px;
  margin-top: 23px;
  margin-left: 1px;
  letter-spacing: 0;
`;

const OverlapGroup11 = styled.div`
  height: 82px;
  z-index: 6;
  display: flex;
  padding: 26px 242px;
  align-items: flex-start;
  min-width: 1920px;
  background-color: var(--armadillo-2);
`;

const OverlapGroup61 = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
  margin-top: 3px;
  border-radius: 9px;
`;

const C = styled.img`
  position: absolute;
  width: 8px;
  height: 11px;
  top: 4px;
  left: 5px;
`;

const Ellipse17 = styled.div`
  ${Border2pxMistGray}
  position: absolute;
  width: 18px;
  height: 18px;
  top: 0;
  left: 0;
  border-radius: 9px;
`;

const Text43 = styled.div`
  ${BarlowMediumSpringWood20px}
  min-height: 24px;
  margin-left: 7px;
  letter-spacing: 0;
`;

export default AboutUs;
