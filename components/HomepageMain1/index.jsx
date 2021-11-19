import React from "react";
import { Link } from "react-router-dom";
import Group138773 from "../Group138773";
import Group13941 from "../Group13941";
import Group13880 from "../Group13880";
import Group13881 from "../Group13881";
import Group13882 from "../Group13882";
import Group13896 from "../Group13896";
import Group14007 from "../Group14007";
import Group14006 from "../Group14006";
import Group138882 from "../Group138882";
import Group13916 from "../Group13916";
import Group14020 from "../Group14020";
import Group14023 from "../Group14023";
import Group13921 from "../Group13921";
import Group13919 from "../Group13919";
import Footer from "../Footer";
import styled from "styled-components";
import {
  BarlowMediumAbbey24px,
  FirasansSemiBoldAbbey28px,
  BarlowNormalAbbey30px,
  BarlowSemiBoldAbbey24px,
  PlayfairdisplayBoldMineShaft64px,
  BarlowMediumMineShaft20px,
  PlayfairdisplayBoldMineShaft96px,
  BarlowMediumAbbey30px,
  FirasansSemiBoldAbbey18px,
  BarlowBoldAbbey24px,
} from "../../styledMixins";
import "./HomepageMain1.css";

class HomepageMain1 extends React.Component {
  render() {
    const {
      name,
      text77,
      image,
      place,
      aboutUs,
      ourWork,
      inNews,
      supportUs,
      finalLogo_Png0111,
      aboutUs2,
      spanText,
      spanText2,
      spanText3,
      img1,
      whatDoWeDo,
      text78,
      learnMore,
      untitledDesign1,
      untitledDesign11,
      untitledDesign21,
      featuredWork,
      spanText4,
      spanText5,
      image2,
      image3,
      spanText6,
      spanText7,
      image4,
      spanText8,
      spanText9,
      readMore,
      readMore2,
      readMore3,
      latestNews,
      inLatestNews,
      text93,
      phone,
      image5,
      readMore4,
      text94,
      phone2,
      image6,
      readMore5,
      text95,
      phone3,
      rectangle53,
      readMore6,
      recentPosts,
      untitledDesign41,
      workWithUs,
      text105,
      group14006Props,
      group138882Props,
      group13916Props,
      group139162Props,
      group1388822Props,
      group1388823Props,
      group139163Props,
      group139164Props,
      group139165Props,
      group1388824Props,
      group14020Props,
      group139166Props,
      group140202Props,
      group140203Props,
      group13921Props,
      group1388825Props,
      group13919Props,
      footerProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="homepage-main-1 screen">
          <OverlapGroup15>
            <FlexCol>
              <Name>{name}</Name>
              <Group13876>
                <Group13875 src="/img/group-13875@2x.svg" />
                <Text77>{text77}</Text77>
              </Group13876>
            </FlexCol>
            <Vector18 src="/img/vector-18@2x.svg" />
            <Image src={image} />
          </OverlapGroup15>
          <Rectangle33></Rectangle33>
          <Place>{place}</Place>
          <Link to="/about-us">
            <AboutUs>{aboutUs}</AboutUs>
          </Link>
          <Link to="/our-work-main">
            <OurWork>{ourWork}</OurWork>
          </Link>
          <Link to="/in-news">
            <InNews>{inNews}</InNews>
          </Link>
          <SupportUs>{supportUs}</SupportUs>
          <FinalLogoPng0111 src={finalLogo_Png0111} />
          <Rectangle41></Rectangle41>
          <Group src="/img/group-14@2x.svg" />
          <Vector17 src="/img/vector-17@2x.svg" />
          <Group138773 />
          <OverlapGroup14>
            <Group13941 />
            <FlexCol1>
              <AboutUs1>{aboutUs2}</AboutUs1>
              <Text76>
                <span className="barlow-normal-abbey-30px">{spanText}</span>
                <span className="barlow-medium-abbey-30px">{spanText2}</span>
                <span className="barlow-normal-abbey-30px">{spanText3}</span>
              </Text76>
            </FlexCol1>
          </OverlapGroup14>
          <OverlapGroup9>
            <Group13880 />
            <Img1 src={img1} />
          </OverlapGroup9>
          <OverlapGroup13>
            <WhatDoWeDo>{whatDoWeDo}</WhatDoWeDo>
            <Text78>{text78}</Text78>
            <LEARNMORE>{learnMore}</LEARNMORE>
            <FlexRow>
              <OverlapGroup19>
                <UntitledDesign1 src={untitledDesign1} />
                <Group13881 />
              </OverlapGroup19>
              <OverlapGroup18>
                <UntitledDesign11 src={untitledDesign11} />
                <Group13882 />
              </OverlapGroup18>
              <OverlapGroup17>
                <UntitledDesign21 src={untitledDesign21} />
                <Group13896 />
              </OverlapGroup17>
            </FlexRow>
          </OverlapGroup13>
          <Group14007 />
          <Group14006
            group13893Props={group14006Props.group13893Props}
            group138882Props2={group14006Props.group138882Props2}
          />
          <OverlapGroup10>
            <OverlapGroup21>
              <FeaturedWork>{featuredWork}</FeaturedWork>
              <Group138882 className={group138882Props.className} />
            </OverlapGroup21>
            <FlexRow1>
              <OverlapGroup22>
                <Text90>
                  <span className="barlow-semi-bold-abbey-24px">{spanText4}</span>
                  <span className="barlow-normal-abbey-24px">{spanText5}</span>
                </Text90>
                <Image1 src={image2} />
              </OverlapGroup22>
              <OverlapGroup20>
                <Image2 src={image3} />
                <Text91>
                  <span className="barlow-semi-bold-abbey-24px">{spanText6}</span>
                  <span className="barlow-normal-abbey-24px">{spanText7}</span>
                </Text91>
              </OverlapGroup20>
              <OverlapGroup20>
                <Image2 src={image4} />
                <Text92>
                  <span className="barlow-semi-bold-abbey-24px">{spanText8}</span>
                  <span className="barlow-normal-abbey-24px">{spanText9}</span>
                </Text92>
              </OverlapGroup20>
            </FlexRow1>
            <FlexRow2>
              <Group13916 />
              <READMORE>{readMore}</READMORE>
              <Group13916 className={group13916Props.className} />
              <READMORE>{readMore2}</READMORE>
              <Group13916 className={group139162Props.className} />
              <READMORE>{readMore3}</READMORE>
            </FlexRow2>
          </OverlapGroup10>
          <OverlapGroup11>
            <OverlapGroup>
              <FeaturedWork>{latestNews}</FeaturedWork>
              <Group138882 className={group1388822Props.className} />
            </OverlapGroup>
            <Rectangle49 src="/img/rectangle-49@1x.svg" />
            <OverlapGroup4>
              <FeaturedWork>{inLatestNews}</FeaturedWork>
              <Group138882 className={group1388823Props.className} />
            </OverlapGroup4>
            <Text93>{text93}</Text93>
            <Phone>{phone}</Phone>
            <Image3 src={image5} />
            <READMORE1>{readMore4}</READMORE1>
            <Text94>{text94}</Text94>
            <Phone1>{phone2}</Phone1>
            <Image4 src={image6} />
            <READMORE2>{readMore5}</READMORE2>
            <Text95>{text95}</Text95>
            <Phone2>{phone3}</Phone2>
            <Rectangle53 src={rectangle53} />
            <READMORE3>{readMore6}</READMORE3>
            <Group13916 className={group139163Props.className} />
            <Group13916 className={group139164Props.className} />
            <Group13916 className={group139165Props.className} />
          </OverlapGroup11>
          <OverlapGroup8>
            <OverlapGroup1>
              <FeaturedWork>{recentPosts}</FeaturedWork>
              <Group138882 className={group1388824Props.className} />
            </OverlapGroup1>
            <Group14020 group13960Props={group14020Props.group13960Props} />
            <Group13916 className={group139166Props.className} />
            <Group14020 className={group140202Props.className} group13960Props={group140202Props.group13960Props} />
            <Group14020 className={group140203Props.className} group13960Props={group140203Props.group13960Props} />
            <Group14023 />
          </OverlapGroup8>
          <OverlapGroup16>
            <UntitledDesign41 src={untitledDesign41} />
            <Group13921
              group13919Props={group13921Props.group13919Props}
              group13919Props2={group13921Props.group13919Props2}
            />
          </OverlapGroup16>
          <OverlapGroup12>
            <OverlapGroup2>
              <FeaturedWork>{workWithUs}</FeaturedWork>
              <Group138882 className={group1388825Props.className} />
            </OverlapGroup2>
            <Group13922>
              <Text105>{text105}</Text105>
              <Group13919 supportUs={group13919Props.supportUs} group13909Props={group13919Props.group13909Props} />
            </Group13922>
          </OverlapGroup12>
          <Footer
            className={footerProps.className}
            group14013Props={footerProps.group14013Props}
            group14012Props={footerProps.group14012Props}
          />
        </div>
      </div>
    );
  }
}

const OverlapGroup15 = styled.div`
  height: 1080px;
  z-index: 1;
  display: flex;
  padding: 49.5px 178px;
  align-items: center;
  min-width: 1920px;
  background-color: var(--spring-wood-2);
`;

const FlexCol = styled.div`
  width: 708px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 472px;
`;

const Name = styled.div`
  ${PlayfairdisplayBoldMineShaft96px}
  width: 708px;
  min-height: 297px;
  letter-spacing: 0;
  line-height: 98.9px;
`;

const Group13876 = styled.div`
  width: 628px;
  margin-top: 72px;
  margin-left: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 103px;
`;

const Group13875 = styled.img`
  width: 104px;
  height: 10px;
  margin-top: -5px;
`;

const Text77 = styled.div`
  ${BarlowMediumAbbey24px}
  width: 626px;
  min-height: 87px;
  margin-top: 11px;
  letter-spacing: 0;
`;

const Vector18 = styled.img`
  width: 47px;
  height: 25px;
  align-self: flex-end;
  margin-left: 51px;
`;

const Image = styled.img`
  width: 524px;
  height: 769px;
  margin-left: 156px;
  margin-top: 76.74px;
  object-fit: cover;
`;

const Rectangle33 = styled.div`
  position: fixed;
  width: 1920px;
  height: 100px;
  top: 0;
  left: 0;
  z-index: 13;
  background-color: var(--alabaster);
  box-shadow: 0px 0px 45px #3333330d;
`;

const Place = styled.div`
  ${BarlowMediumMineShaft20px}
  position: fixed;
  top: 25px;
  left: 1128px;
  z-index: 14;
  letter-spacing: 0;
`;

const AboutUs = styled.div`
  ${BarlowMediumMineShaft20px}
  position: fixed;
  top: 25px;
  left: 1228px;
  z-index: 15;
  letter-spacing: 0;
  cursor: pointer;
`;

const OurWork = styled.div`
  ${BarlowMediumMineShaft20px}
  position: fixed;
  top: 25px;
  left: 1356px;
  z-index: 16;
  letter-spacing: 0;
  cursor: pointer;
`;

const InNews = styled.div`
  ${BarlowMediumMineShaft20px}
  position: fixed;
  top: 25px;
  left: 1484px;
  z-index: 17;
  letter-spacing: 0;
  cursor: pointer;
`;

const SupportUs = styled.div`
  ${BarlowMediumMineShaft20px}
  position: fixed;
  top: 25px;
  left: 1600px;
  z-index: 18;
  letter-spacing: 0;
`;

const FinalLogoPng0111 = styled.img`
  position: fixed;
  width: 187px;
  height: 50px;
  top: 25px;
  left: 120px;
  z-index: 21;
  object-fit: cover;
`;

const Rectangle41 = styled.div`
  position: fixed;
  width: 44px;
  height: 44px;
  top: 28px;
  left: 1720px;
  z-index: 19;
  background-color: var(--green-white);
  border-radius: 150px;
`;

const Group = styled.img`
  position: fixed;
  width: 24px;
  height: 23px;
  top: 38px;
  left: 1730px;
  z-index: 20;
`;

const Vector17 = styled.img`
  position: fixed;
  width: 44px;
  height: 4px;
  top: 62px;
  left: 1126px;
  z-index: 22;
`;

const OverlapGroup14 = styled.div`
  height: 1080px;
  z-index: 2;
  position: relative;
  display: flex;
  padding: 389px 120px;
  align-items: center;
  min-width: 1920px;
  background-color: var(--green-white);
`;

const FlexCol1 = styled.div`
  width: 626px;
  align-self: flex-end;
  margin-left: 66px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 297px;
`;

const AboutUs1 = styled.div`
  ${PlayfairdisplayBoldMineShaft64px}
  width: 626px;
  min-height: 85px;
  letter-spacing: 0;
`;

const Text76 = styled.div`
  ${BarlowNormalAbbey30px}
  width: 546px;
  min-height: 180px;
  margin-top: 32px;
  letter-spacing: 0;
`;

const OverlapGroup9 = styled.div`
  z-index: 4;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 1920px;
  background-color: var(--spring-wood-2);
`;

const Img1 = styled.img`
  width: 857px;
  height: 1080px;
  margin-left: 111px;
`;

const OverlapGroup13 = styled.div`
  width: 1920px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  padding: 80px 120px;
  align-items: flex-end;
  min-height: 1080px;
  background-color: var(--green-white);
`;

const WhatDoWeDo = styled.div`
  ${PlayfairdisplayBoldMineShaft64px}
  min-height: 85px;
  align-self: flex-start;
  margin-left: 142px;
  letter-spacing: 0;
`;

const Text78 = styled.div`
  ${BarlowNormalAbbey30px}
  width: 1538px;
  min-height: 72px;
  margin-top: 32px;
  letter-spacing: 0;
`;

const LEARNMORE = styled.div`
  ${FirasansSemiBoldAbbey28px}
  width: 1538px;
  min-height: 34px;
  margin-top: 32px;
  letter-spacing: 0;
  text-decoration: underline;
`;

const FlexRow = styled.div`
  height: 538px;
  margin-top: 71px;
  margin-right: 119px;
  display: flex;
  align-items: flex-start;
  min-width: 1419px;
`;

const OverlapGroup19 = styled.div`
  width: 425px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 45px 43px;
  align-items: flex-end;
  min-height: 538px;
  background-color: var(--spring-wood-2);
  border-radius: 5px;
  box-shadow: 0px 4px 45px #00000009;
`;

const UntitledDesign1 = styled.img`
  width: 201px;
  height: 200px;
  align-self: center;
`;

const OverlapGroup18 = styled.div`
  width: 425px;
  position: relative;
  margin-left: 72px;
  display: flex;
  flex-direction: column;
  padding: 45px 43px;
  align-items: flex-end;
  min-height: 538px;
  background-color: var(--spring-wood-2);
  border-radius: 5px;
  box-shadow: 0px 4px 45px #00000009;
`;

const UntitledDesign11 = styled.img`
  width: 122px;
  height: 200px;
  align-self: center;
  margin-left: 1px;
`;

const OverlapGroup17 = styled.div`
  width: 425px;
  position: relative;
  margin-left: 72px;
  display: flex;
  flex-direction: column;
  padding: 45px 42px;
  align-items: flex-end;
  min-height: 538px;
  background-color: var(--spring-wood-2);
  border-radius: 5px;
  box-shadow: 0px 4px 45px #00000009;
`;

const UntitledDesign21 = styled.img`
  width: 262px;
  height: 200px;
  margin-right: 39px;
`;

const OverlapGroup10 = styled.div`
  width: 1920px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  padding: 117px 0;
  align-items: center;
  min-height: 1080px;
  background-color: var(--spring-wood-2);
`;

const OverlapGroup21 = styled.div`
  width: 435px;
  height: 90px;
  position: relative;
  align-self: flex-start;
  margin-top: 24px;
  margin-left: 262px;
`;

const FeaturedWork = styled.div`
  ${PlayfairdisplayBoldMineShaft64px}
  position: absolute;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const FlexRow1 = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  min-width: 1486px;
`;

const OverlapGroup22 = styled.div`
  width: 476px;
  height: 684px;
  position: relative;
`;

const Text90 = styled.div`
  ${BarlowSemiBoldAbbey24px}
  position: absolute;
  width: 386px;
  top: 626px;
  left: 45px;
  letter-spacing: 0;
`;

const Image1 = styled.img`
  position: absolute;
  width: 476px;
  height: 636px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const OverlapGroup20 = styled.div`
  width: 477px;
  height: 684px;
  position: relative;
  margin-left: 28px;
`;

const Image2 = styled.img`
  position: absolute;
  width: 477px;
  height: 636px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Text91 = styled.div`
  ${BarlowSemiBoldAbbey24px}
  position: absolute;
  width: 409px;
  top: 626px;
  left: 45px;
  letter-spacing: 0;
`;

const Text92 = styled.div`
  ${BarlowSemiBoldAbbey24px}
  position: absolute;
  width: 409px;
  top: 626px;
  left: 48px;
  letter-spacing: 0;
`;

const FlexRow2 = styled.div`
  ${FirasansSemiBoldAbbey18px}
  height: 22px;
  position: relative;
  margin-top: 16px;
  margin-right: 265px;
  display: flex;
  align-items: center;
  min-width: 1131px;
`;

const READMORE = styled.div`
  min-height: 22px;
  margin-left: 8px;
  min-width: 95px;
  letter-spacing: 0;
  text-decoration: underline;
`;

const OverlapGroup11 = styled.div`
  width: 1920px;
  height: 820px;
  z-index: 7;
  position: relative;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 350px;
  height: 90px;
  top: 72px;
  left: 262px;
`;

const Rectangle49 = styled.img`
  position: absolute;
  width: 1920px;
  height: 820px;
  top: 0;
  left: 0;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 428px;
  height: 90px;
  top: 72px;
  left: 262px;
`;

const Text93 = styled.div`
  ${BarlowMediumAbbey24px}
  position: absolute;
  width: 415px;
  top: 531px;
  left: 258px;
  letter-spacing: 0;
`;

const Phone = styled.div`
  ${BarlowBoldAbbey24px}
  position: absolute;
  width: 415px;
  top: 626px;
  left: 258px;
  letter-spacing: 0;
`;

const Image3 = styled.img`
  position: absolute;
  width: 509px;
  height: 381px;
  top: 177px;
  left: 213px;
`;

const READMORE1 = styled.div`
  ${FirasansSemiBoldAbbey18px}
  position: absolute;
  top: 671px;
  left: 282px;
  letter-spacing: 0;
  text-decoration: underline;
`;

const Text94 = styled.div`
  ${BarlowMediumAbbey24px}
  position: absolute;
  width: 415px;
  top: 531px;
  left: 757px;
  letter-spacing: 0;
`;

const Phone1 = styled.div`
  ${BarlowBoldAbbey24px}
  position: absolute;
  width: 415px;
  top: 626px;
  left: 757px;
  letter-spacing: 0;
`;

const Image4 = styled.img`
  position: absolute;
  width: 506px;
  height: 381px;
  top: 177px;
  left: 712px;
`;

const READMORE2 = styled.div`
  ${FirasansSemiBoldAbbey18px}
  position: absolute;
  top: 671px;
  left: 781px;
  letter-spacing: 0;
  text-decoration: underline;
`;

const Text95 = styled.div`
  ${BarlowMediumAbbey24px}
  position: absolute;
  width: 415px;
  top: 531px;
  left: 1253px;
  letter-spacing: 0;
`;

const Phone2 = styled.div`
  ${BarlowBoldAbbey24px}
  position: absolute;
  width: 415px;
  top: 626px;
  left: 1253px;
  letter-spacing: 0;
`;

const Rectangle53 = styled.img`
  position: absolute;
  width: 494px;
  height: 381px;
  top: 177px;
  left: 1208px;
  object-fit: cover;
`;

const READMORE3 = styled.div`
  ${FirasansSemiBoldAbbey18px}
  position: absolute;
  top: 671px;
  left: 1277px;
  letter-spacing: 0;
  text-decoration: underline;
`;

const OverlapGroup8 = styled.div`
  width: 1920px;
  z-index: 6;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 83px 0;
  align-items: center;
  min-height: 1231px;
  background-color: var(--spring-wood-2);
`;

const OverlapGroup1 = styled.div`
  width: 375px;
  height: 90px;
  position: relative;
  align-self: flex-start;
  margin-top: 65px;
  margin-left: 262px;
`;

const OverlapGroup16 = styled.div`
  height: 675px;
  z-index: 10;
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
  z-index: 11;
  display: flex;
  flex-direction: column;
  padding: 145px 262px;
  align-items: flex-start;
  min-height: 675px;
  background-color: var(--spring-wood-2);
`;

const OverlapGroup2 = styled.div`
  width: 388px;
  height: 90px;
  position: relative;
  margin-top: 1px;
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

const Text105 = styled.div`
  ${BarlowMediumAbbey30px}
  width: 688px;
  min-height: 180px;
  letter-spacing: 0;
`;

export default HomepageMain1;
