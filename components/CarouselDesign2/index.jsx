import React from "react";
import styled from "styled-components";
import Group14034 from "../Group14034";
import Group13960 from "../Group13960";
import Group14042 from "../Group14042";
import Group138773 from "../Group138773";
import Group13888 from "../Group13888";
import Group13909 from "../Group13909";
import Group13921 from "../Group13921";

import {
  PlayfairdisplayBoldWhite36px,
  FirasansSemiBoldAbbey28px,
  BarlowMediumSpringWood24px,
  BarlowSemiBoldAbbey24px,
  PlayfairdisplayBoldWhite26px,
  PlayfairdisplayBoldMineShaft64px,
  BarlowMediumMineShaft20px,
  BarlowMediumAbbey30px,
  BarlowMediumSpringWood28px,
  BarlowMediumGray24px,
} from "../../styledMixins";

class CarouselDesign2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: props.data,
      presentInd: 0,
      presentElement: props.data[0],
    };
  }

  goToNextSlide = () => {
    let nextInd = this.state.presentInd + 1;
    let si = this.state.carouselData.length;
    if (nextInd < si) {
      this.setState({
        presentInd: nextInd,
        presentElement: this.state.carouselData[nextInd],
      });
    }
  };
  goToPrevSlide = () => {
    let prevInd = this.state.presentInd - 1;
    if (prevInd < 0) return;
    else {
      this.setState({
        presentInd: prevInd,
        presentElement: this.state.carouselData[prevInd],
      });
    }
  };
  render() {
    console.log(this.state.presentElement);
    const {
      inNews,
      text108,
      articles,
      image,
      text109,
      scrollIn,
      overlapGroup1,
      newsclick,
      text110,
      image2,
      image3,
      text111,
      liveLaw,
      image4,
      rectangle71,
      text112,
      epw,
      image5,
      image6,
      text113,
      thePrint,
      overlapGroup5,
      text114,
      scrollIn2,
      finalLogo_Png0111,
      place,
      aboutUs,
      ourWork,
      inNews2,
      supportUs,
      discussions,
      group14049,
      text117,
      liveLaw2,
      image51,
      image7,
      image8,
      image50,
      number,
      number2,
      number3,
      number4,
      text116,
      number5,
      workWithUs,
      text119,
      contactUs,
      untitledDesign41,
      group14034Props,
      group140342Props,
      group140343Props,
      group140344Props,
      group140345Props,
      group140346Props,
      group13960Props,
      group138773Props,
      group140347Props,
      group13888Props,
      group13909Props,
      group139602Props,
      group13921Props,
      footerProps,
    } = this.props;
    console.log(group140347Props);
    return (
      <div>
        <OverlapGroup12>
          <OverlapGroup6>
            <OverlapGroup>
              <Rectangle69></Rectangle69>
              <Image src={this.state.presentElement.image} />
              <Group14034 className="group-14034-2" />
              <Text109>{this.state.presentElement.text109}</Text109>
              <Scrollin>{this.state.presentElement.scrollIn}</Scrollin>
            </OverlapGroup>
            <OverlapGroup1
              style={{
                backgroundImage: `url(${this.state.presentElement.bgImg1})`,
              }}
            >
              <NewsClick>{this.state.presentElement.newsclick}</NewsClick>
              <Text110>{this.state.presentElement.text110}</Text110>
              <Group14034 className="group-14034-3" />
            </OverlapGroup1>
            <OverlapGroup2>
              <Rectangle69></Rectangle69>
              <Image src={this.state.presentElement.image2} />
              <Image1 src={this.state.presentElement.image3} />
              <Group14034 className="group-14034-4" />
              <Text109>{this.state.presentElement.text111}</Text109>
              <Scrollin>{this.state.presentElement.liveLaw}</Scrollin>
            </OverlapGroup2>
            <OverlapGroup3>
              <Rectangle69></Rectangle69>
              <Image src={this.state.presentElement.image4} />
              <Rectangle71 src={this.state.presentElement.rectangle71} />
              <Group14034 className="group-14034-5" />
              <Text109>{this.state.presentElement.text112}</Text109>
              <Scrollin>{this.state.presentElement.epw}</Scrollin>
            </OverlapGroup3>
            <OverlapGroup4>
              <Rectangle69></Rectangle69>
              <Image src={this.state.presentElement.image5} />
              <Image1 src={this.state.presentElement.image6} />
              <Group14034 className="group-14034-6" />
              <Text113>{this.state.presentElement.text113}</Text113>
              <ThePrint>{this.state.presentElement.thePrint}</ThePrint>
            </OverlapGroup4>
            <OverlapGroup5
              style={{
                backgroundImage: `url(${this.state.presentElement.bgImg2})`,
              }}
            >
              <Text114>{this.state.presentElement.text114}</Text114>
              <Scrollin1>{this.state.presentElement.scrollIn2}</Scrollin1>
              <Group14034 className="group-14024" />
            </OverlapGroup5>
          </OverlapGroup6>
          <Group13960 className="group-13959-5" />
        </OverlapGroup12>
        <FlexRow>
          <button onClick={this.goToPrevSlide}>
            <Group1 src="/img/group-39@2x.svg" />
          </button>
          <OverlapGroup13>
            <Ellipse15></Ellipse15>
            <Number>{this.state.presentInd + 1}</Number>
          </OverlapGroup13>

          <button onClick={this.goToNextSlide}>
            <Group2 src="/img/group-40@2x.svg" />
          </button>
        </FlexRow>
      </div>
    );
  }
}
const Rectangle33 = styled.div`
  position: fixed;
  width: 1920px;
  height: 100px;
  top: 0;
  left: 0;
  z-index: 6;
  background-color: var(--alabaster);
  box-shadow: 0px 0px 45px #3333330d;
`;

const OverlapGroup11 = styled.div`
  width: 1920px;
  z-index: 1;
  position: relative;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  padding: 119px 0;
  align-items: center;
  min-height: 1835px;
  background-color: var(--spring-wood-2);
`;

const Group14052 = styled.div`
  width: 975px;
  margin-top: 122px;
  margin-right: 421px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 149px;
`;

const InNews1 = styled.div`
  min-height: 74px;
  font-family: var(--font-family-playfair_display);
  font-weight: 700;
  color: var(--mine-shaft);
  font-size: 72px;
  letter-spacing: 0;
  line-height: 74.2px;
  white-space: nowrap;
`;

const Text108 = styled.div`
  width: 971px;
  min-height: 43px;
  margin-top: 32px;
  font-family: var(--font-family-barlow);
  font-weight: 500;
  color: var(--abbey);
  font-size: 36px;
  letter-spacing: 0;
`;

const Articles = styled.div`
  ${PlayfairdisplayBoldMineShaft64px}
  min-height: 66px;
  align-self: flex-start;
  margin-top: 80px;
  margin-left: 266px;
  letter-spacing: 0;
  line-height: 65.9px;
  white-space: nowrap;
`;

const OverlapGroup12 = styled.div`
  width: 1486px;
  height: 1062px;
  position: relative;
  margin-top: 15px;
`;

const OverlapGroup6 = styled.div`
  position: absolute;
  width: 1486px;
  height: 1062px;
  top: 0;
  left: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 494px;
  height: 368px;
  top: 694px;
  left: 0;
`;

const Rectangle69 = styled.div`
  position: absolute;
  width: 404px;
  height: 278px;
  top: 41px;
  left: 45px;
  background-color: var(--spring-wood-2);
  border-radius: 5px;
`;

const Image = styled.img`
  position: absolute;
  width: 494px;
  height: 368px;
  top: 0;
  left: 0;
`;

const Text109 = styled.div`
  ${PlayfairdisplayBoldWhite26px}
  position: absolute;
  width: 305px;
  top: 129px;
  left: 85px;
  letter-spacing: 0;
`;

const Scrollin = styled.div`
  ${BarlowMediumSpringWood24px}
  position: absolute;
  width: 257px;
  top: 92px;
  left: 85px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 494px;
  top: 694px;
  left: 496px;
  display: flex;
  flex-direction: column;
  padding: 69px 85px;
  align-items: flex-start;
  min-height: 368px;
  background-size: 100% 100%;
`;

const NewsClick = styled.div`
  ${BarlowMediumSpringWood24px}
  width: 257px;
  min-height: 29px;
  margin-top: 23px;
  letter-spacing: 0;
`;

const Text110 = styled.div`
  ${PlayfairdisplayBoldWhite26px}
  width: 305px;
  min-height: 140px;
  margin-top: 8px;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 494px;
  height: 368px;
  top: 694px;
  left: 992px;
`;

const Image1 = styled.img`
  position: absolute;
  width: 404px;
  height: 278px;
  top: 41px;
  left: 45px;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 494px;
  height: 368px;
  top: 0;
  left: 992px;
`;

const Rectangle71 = styled.img`
  position: absolute;
  width: 494px;
  height: 368px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 494px;
  height: 368px;
  top: 334px;
  left: 992px;
`;

const Text113 = styled.div`
  ${PlayfairdisplayBoldWhite26px}
  position: absolute;
  width: 325px;
  top: 152px;
  left: 85px;
  letter-spacing: 0;
`;

const ThePrint = styled.div`
  ${BarlowMediumSpringWood24px}
  position: absolute;
  width: 257px;
  top: 107px;
  left: 85px;
  letter-spacing: 0;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 1001px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 85px;
  align-items: flex-start;
  min-height: 702px;
  background-size: 100% 100%;
`;

const Text114 = styled.div`
  ${PlayfairdisplayBoldWhite36px}
  width: 648px;
  min-height: 144px;
  margin-top: 300px;
  letter-spacing: 0;
`;

const Scrollin1 = styled.div`
  ${BarlowMediumSpringWood28px}
  min-height: 34px;
  margin-top: 16px;
  letter-spacing: 0;
`;

const FinalLogoPng0111 = styled.img`
  position: fixed;
  width: 187px;
  height: 50px;
  top: 25px;
  left: 120px;
  z-index: 14;
  object-fit: cover;
`;

const Rectangle41 = styled.div`
  position: fixed;
  width: 44px;
  height: 44px;
  top: 28px;
  left: 1720px;
  z-index: 12;
  background-color: var(--green-white);
  border-radius: 150px;
`;

const Place = styled.div`
  ${BarlowMediumMineShaft20px}
  position: fixed;
  top: 38px;
  left: 1126px;
  z-index: 7;
  letter-spacing: 0;
  cursor: pointer;
`;

const AboutUs = styled.div`
  ${BarlowMediumMineShaft20px}
  position: fixed;
  top: 38px;
  left: 1226px;
  z-index: 8;
  letter-spacing: 0;
  cursor: pointer;
`;

const OurWork = styled.div`
  ${BarlowMediumMineShaft20px}
  position: fixed;
  top: 38px;
  left: 1354px;
  z-index: 9;
  letter-spacing: 0;
  cursor: pointer;
`;

const InNews2 = styled.div`
  ${BarlowMediumMineShaft20px}
  position: fixed;
  top: 38px;
  left: 1482px;
  z-index: 10;
  letter-spacing: 0;
`;

const SupportUs = styled.div`
  ${BarlowMediumMineShaft20px}
  position: fixed;
  top: 38px;
  left: 1598px;
  z-index: 11;
  letter-spacing: 0;
`;

const Group = styled.img`
  position: fixed;
  width: 24px;
  height: 23px;
  top: 38px;
  left: 1730px;
  z-index: 13;
`;

const Vector17 = styled.img`
  position: fixed;
  width: 70px;
  height: 4px;
  top: 62px;
  left: 1480px;
  z-index: 15;
`;

const OverlapGroup9 = styled.div`
  width: 1920px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 171px 0;
  align-items: center;
  min-height: 1229px;
  background-color: var(--green-white);
`;

const Group14054 = styled.div`
  width: 1398px;
  margin-top: 1px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 734px;
`;

const Discussions = styled.div`
  ${PlayfairdisplayBoldMineShaft64px}
  min-height: 66px;
  letter-spacing: 0;
  line-height: 65.9px;
  white-space: nowrap;
`;

const Group14051 = styled.div`
  height: 612px;
  margin-top: 56px;
  display: flex;
  align-items: flex-end;
  min-width: 1396px;
`;

const Group14049 = styled.div`
  width: 911px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 36px 40px;
  align-items: flex-start;
  min-height: 612px;
  background-size: 100% 100%;
`;

const Text117 = styled.div`
  ${PlayfairdisplayBoldWhite36px}
  width: 648px;
  min-height: 144px;
  margin-top: 308px;
  letter-spacing: 0;
`;

const FlexCol = styled.div`
  width: 484px;
  margin-left: 36px;
  margin-bottom: -49px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 661px;
`;

const Image51 = styled.img`
  width: 404px;
  height: 278px;
  margin-left: 10.71px;
`;

const OverlapGroup7 = styled.div`
  width: 484px;
  height: 368px;
  position: relative;
  margin-top: 15px;
`;

const Rectangle691 = styled.div`
  position: absolute;
  width: 393px;
  height: 278px;
  top: 41px;
  left: 45px;
  background-color: var(--spring-wood-2);
  border-radius: 5px;
`;

const Image2 = styled.img`
  position: absolute;
  width: 484px;
  height: 368px;
  top: 0;
  left: 0;
`;

const Image3 = styled.img`
  position: absolute;
  width: 394px;
  height: 278px;
  top: 41px;
  left: 45px;
`;

const Image50 = styled.img`
  position: absolute;
  width: 404px;
  height: 278px;
  top: 41px;
  left: 45px;
  object-fit: cover;
`;

const Vector30 = styled.img`
  width: 1442px;
  height: 6px;
  margin-top: 77px;
`;

const FlexRow = styled.div`
  ${BarlowMediumGray24px}
  margin-top: 37px;

  display: flex;
  align-items: center;
  min-width: 339px;
`;

const Group1 = styled.img`
  width: 18px;
  height: 14px;
  margin-bottom: 0.79px;
`;

const OverlapGroup13 = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  margin-left: 28px;
  border-radius: 16px;
`;

const Ellipse15 = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 0;
  left: 0;
  background-color: var(--westar);
  border-radius: 16px;
`;

const Number = styled.div`
  ${BarlowSemiBoldAbbey24px}
  position: absolute;
  top: 1px;
  left: 11px;
  letter-spacing: 0;
`;

const Number1 = styled.div`
  min-height: 29px;
  margin-left: 12px;
  margin-bottom: 1px;
  min-width: 14px;
  letter-spacing: 0;
`;

const Number2 = styled.div`
  min-height: 29px;
  margin-left: 24px;
  margin-bottom: 1px;
  min-width: 13px;
  letter-spacing: 0;
`;

const Number3 = styled.div`
  min-height: 29px;
  margin-left: 24px;
  margin-bottom: 1px;
  min-width: 14px;
  letter-spacing: 0;
`;

const Text116 = styled.div`
  min-height: 29px;
  margin-left: 24px;
  margin-bottom: 1px;
  min-width: 27px;
  letter-spacing: 0;
`;

const Group2 = styled.img`
  width: 18px;
  height: 14px;
  margin-left: 40px;
  margin-bottom: 0.79px;
`;

const Group14055 = styled.div`
  width: 1920px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  padding: 145px 262px;
  align-items: flex-start;
  min-height: 675px;
  background-color: var(--spring-wood-2);
`;

const OverlapGroup8 = styled.div`
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
  margin-top: 56px;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 238px;
`;

const Text119 = styled.div`
  ${BarlowMediumAbbey30px}
  width: 688px;
  min-height: 180px;
  margin-left: 0;
  letter-spacing: 0;
`;

const Group13920 = styled.div`
  height: 34px;
  position: relative;
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  min-width: 206px;
`;

const ContactUs = styled.div`
  ${FirasansSemiBoldAbbey28px}
  width: 164px;
  min-height: 34px;
  margin-left: 16px;
  margin-top: 0;
  letter-spacing: 0;
  text-decoration: underline;
`;

const OverlapGroup10 = styled.div`
  width: 1920px;
  height: 675px;
  z-index: 3;
  position: relative;
`;

const Group14057 = styled.div`
  position: absolute;
  height: 675px;
  top: 0;
  left: 0;
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

export default CarouselDesign2;
