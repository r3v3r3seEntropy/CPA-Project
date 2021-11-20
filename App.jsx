
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import MobileHomepageMain from "./components/MobileHomepageMain";
import AboutUs from "./components/AboutUs";
import OurWorkMain from "./components/OurWorkMain";
import HomepageMain1 from "./components/HomepageMain1";
import InNews from "./components/InNews";
import MobileInNewsMain from "./components/MobileInNewsMain";
import MobileAboutUsMain22 from "./components/MobileAboutUsMain22";
import MobileAboutUsMain2 from "./components/MobileAboutUsMain2";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/mobile-homepage-main">
            <MobileHomepageMain {...mobileHomepageMainData} />
          </Route>
          <Route path="/about-us">
            <AboutUs {...aboutUsData} />
          </Route>
          <Route path="/our-work-main">
            <OurWorkMain {...ourWorkMainData} />
          </Route>
          <Route path="/:path(|homepage-main-1)">
            <HomepageMain1 {...homepageMain1Data} />
          </Route>
          <Route path="/in-news">
            <InNews {...inNewsData} />
          </Route>
          <Route path="/mobile-in-news-main">
            <MobileInNewsMain {...mobileInNewsMainData} />
          </Route>
          <Route path="/mobile-about-us-main-1">
            <MobileAboutUsMain22 {...mobileAboutUsMain22Data} />
          </Route>
          <Route path="/mobile-about-us-main">
            <MobileAboutUsMain2 {...mobileAboutUsMain2Data} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const group138882Data = {
    className: "group-13889",
};

const group14103Data = {
    text64: "50+",
    spanText: "persons provided with ",
    spanText2: "quality representation",
    spanText3: <> in <br />district courts</>,
    group13888Props: group138882Data,
};

const group138883Data = {
    className: "group-13890",
};

const group141032Data = {
    text64: "2",
    spanText: "Law students from ",
    spanText2: "Vimukta & Adivasi ",
    spanText3: "communities in Bhopal supported",
    className: "group-13892",
    group13888Props: group138883Data,
};

const group140785Data = {
    className: "",
};

const group14083Data = {
    text2: "Construction(s) of Female Criminality: Gender, Caste and State Violence",
    group14078Props: group140785Data,
};

const group140786Data = {
    className: "",
};

const group140832Data = {
    text2: "Over 64 % of Accused under Excise Laws are SC/ST, Nomadic Tribes in MP",
    group14078Props: group140786Data,
};

const group140922Data = {
    className: "group-14093",
};

const group140923Data = {
    className: "group-14094",
};

const group139092Data = {
    className: "group-14064-1",
};

const group14095Data = {
    group13909Props: group139092Data,
};

const mobileHomepageMainData = {
    image: "/img/image-74@2x.png",
    text145: <>The very existence <br />of the prison <br />forecloses the <br />kinds of discussions <br />that we need in order <br />to imagine the possibility <br />of eradicating these behavior.</>,
    name: <>Justice <br />begins where<br />inequality ends.</>,
    finalLogo_Png0111: "/img/final-logo-png-01--1--1@2x.png",
    aboutUs: "About Us",
    spanText: "The CPA Project is a ",
    spanText2: "litigation, research and capacity-building intervention",
    spanText3: "committed to ending the disproportionate targeting of marginalisedcommunities by the criminal justice system.",
    img1: "/img/img-1-1@2x.png",
    ourVision: "Our Vision",
    spanText4: "To create a society that values",
    spanText5: "community care",
    spanText6: " over incarceration and where caste's stronghold over thejustice system is dismantled.",
    whatWeDo: "What we do",
    text148: "We use data-driven research and human rights lawyering to support vulnerable & historicallymarginalised communities advocate for decriminalisation and decarceration.",
    learnMore: "LEARN MORE",
    untitledDesign2: "/img/untitled-design-2@2x.png",
    litigation: "Litigation",
    untitledDesign11: "/img/untitled-design-1--1-3@2x.png",
    researchAdvocacy: <>Research<br /> &amp;Advocacy</>,
    untitledDesign21: "/img/untitled-design-2--1-3@2x.png",
    capacityBuilding: <>Capacity<br />Building</>,
    overlapGroup16: "/img/untitled-design-3--2@1x.png",
    text149: <>In May 2019, we received a distress call from the mother of a minor boy from the Pardhi community in Bhopal that her son has been arrested and detained illegally. The law does not allow for arrest of minors, let alone torture the boy endured. This is however, the everyday reality of several denoitifed tribes.<br /><br />Upon CPA&#x27;s intervention, the 15-year-old Pardhi boy&#x27;s case was transferred to the appropriate authorities (Juvenile Justice Board). He was granted bail finally, after a month. Community mechanisms were put in place to observe and help the child.<br /><br />Similarly, there are several cases where intervention at the right time has ensured that individuals have not had to spend more time than necessary in police custody, escape custodial violence and assert their rights.</>,
    text150: "A 15 year old child detained",
    impact: "Impact",
    spanText7: "The Madhya Pradesh High Court issued directions to the police to ",
    spanText8: "avoid arresting for offences punishable by less than seven years",
    spanText9: " as a result of the ",
    spanText10: "Prison Decongestion PIL",
    spanText11: " filed by the CPA Project",
    spanText12: "Our study on policing during the pandemic underscored how a public health crisis was transformed into a law and order problem through the",
    spanText13: " criminalisation of marginalised communities.",
    spanText14: "Issues of ",
    spanText15: "targeting and intrusive surveillance",
    spanText16: " faced by DNT communities in Bhopal highlighted in International and national media.",
    featuredWork: "Featured Work",
    image2: "/img/image-25@2x.png",
    spanText17: <>Drunk on Power<br /></>,
    spanText18: "A Study of Excise Policing in M.P.",
    image3: "/img/image-25@2x.png",
    spanText19: "Countermapping Pandemic Policing ",
    spanText20: "Sanctioned violence in M.P.",
    image4: "/img/image-75@2x.png",
    image5: "/img/image-25@2x.png",
    spanText21: "Countermapping Pandemic Policing ",
    spanText22: "Sanctioned violence in M.P.",
    image6: "/img/image-76@2x.png",
    inLatestNews: "In Latest News",
    image7: "/img/image-25@2x.png",
    text162: "Why M.P’s new liquor law fails to address casteist, colonial policing",
    image8: "/img/image@2x.png",
    image9: "/img/image@2x.png",
    rectangle53: "/img/rectangle-53@2x.png",
    image10: "/img/image@2x.png",
    image11: "/img/image-7@2x.png",
    supportUs: "Support Us",
    workWithUs: "Work with us",
    untitledDesign42: "/img/untitled-design-4--2@2x.png",
    text171: <>The CPA Project is committed to ending mass incarceration and excessive punishment, challenging caste-based systemic injustices and targetting. <br /><br />Support our work!</>,
    text172: <>If you believe in our approach and work and want to join the movement in any capacity, we would love to hear from you.<br /><br />Do drop us a line!</>,
    supportUs2: "SUPPORT US",
    workWithUs2: "Work with us",
    followUs: "Follow Us",
    ourWork: "OUR WORK",
    litigation2: "Litigation",
    researchAdvocacy2: "Research &Advocacy",
    capacityBuilding2: "Capacity Building",
    resources: "Resources",
    spanText23: <>The CPA Project,<br /></>,
    spanText24: "Bhopal, MP - 300101",
    c: "/img/c@2x.svg",
    text174: "2021 – CPA Project. All rights reserved.",
    group14103Props: group14103Data,
    group141032Props: group141032Data,
    group14083Props: group14083Data,
    group140832Props: group140832Data,
    group14092Props: group140922Data,
    group140922Props: group140923Data,
    group14095Props: group14095Data,
};

const group1388824Data = {
    className: "group-13899-2",
};

const group139093Data = {
    className: "group-13909",
};

const group13919Data = {
    supportUs: "Support Us",
    group13909Props: group139093Data,
};

const group13921Data = {
    group13919Props: group1388824Data,
    group13919Props2: group13919Data,
};

const group1388825Data = {
    className: "group-13899-3",
};

const group139094Data = {
    className: "group-13909-1",
};

const group139192Data = {
    supportUs: "Contact Us",
    group13909Props: group139094Data,
};

const group139362Data = {
    className: "group-13936-1",
};

const group139372Data = {
    className: "group-13937-1",
};

const aboutUsData = {
    aboutUs: "About Us",
    spanText: "The Criminal Justice and Police Accountability Project (CPA Project) was founded in 2019 as a ",
    spanText2: "litigation, research and capacity-building",
    spanText3: <> intervention committed to ending the disproportionate targeting of marginalise`d communities by the criminal justice system.<br />These communities include those previously officially criminalised under colonial laws, now classified as Denotified Tribal (DNT) Communities or Vimukta communities, as well as other communities that are similarly persecuted and stigmatised.</>,
    finalLogo_Png0111: "/img/final-logo-png-01--1--1@2x.png",
    finalLogo_Png01112: "/img/final-logo-png-01--1--1-1@2x.png",
    place: "Home",
    aboutUs2: "About Us",
    ourWork: "Our Work",
    inNews: "In News",
    supportUs: "Support Us",
    image: "/img/image@1x.png",
    d10E4360684B11EaA6Ac9122541Af2041: "/img/d10e4360-684b-11ea-a6ac-9122541af204-1@1x.png",
    spanText4: "E",
    spanText5: "ven though this Act was repealed in 1952, the taint of criminality has persisted through vague laws and arbitrary police powers. They are often charged with false or petty cases, or cases of theft and house-breaking even in the absence of evidence. Many are perpetually trapped in the criminal justice system and are extremely vulnerable to extrajudicial police violence, harassment, extortion and sexual assault.",
    text33: "We are supported by a rolling team of 4-6 paid interns and volunteers.",
    image2: "/img/image-1@1x.png",
    image3: "/img/image-2@1x.png",
    image4: "/img/image-3@1x.png",
    ourTeam: "Our Team",
    text36: "Why do we do this work?",
    spanText6: "I",
    spanText7: "n 1871, the British colonial authorities enacted the Criminal Tribes Act to brand several nomadic and tribal communities as ‘hereditary criminals’ habituated to a life of crime. These communities were then subjugated as the ‘objects of policing’. Their freedoms, livelihoods and cultures were entirely suppressed through extensive surveillance and state control, including forced ‘reformatory’ settlements, coerced collection of personal data, separation of children from families etc.",
    image5: "/img/image-4@2x.png",
    nikitaSonavane: "Nikita Sonavane",
    text37: "Managing Trustee & Co Founder",
    image6: "/img/image-5@2x.png",
    sanjanaMeshram: "Sanjana Meshram",
    text38: "Research Associate & Lawyer",
    image7: "/img/image-6@2x.png",
    aditiPradhan: "Aditi Pradhan",
    text39: "Research Consultant & Lawyer",
    image8: "/img/image-6@2x-copy.png",
    harshKinger: "Harsh Kinger",
    text40: "Research Consultant & Lawyer",
    untitledDesign41: "/img/untitled-design-4--1@2x.png",
    workWithUs: "Work with us",
    text41: <>If you believe in our approach and work and want to join the movement in any capacity, we would love to hear from you.<br /><br />Do drop us a line!</>,
    aboutUs3: "ABOUT US",
    ourIdeology: "Our Ideology",
    ourBeginings: "Our Beginings",
    ourTeam2: "Our Team",
    spanText8: <>The CPA Project,<br /></>,
    spanText9: "Bhopal, MP - 300101",
    text43: "2021 – CPA Project. All rights reserved.",
    group13921Props: group13921Data,
    group138882Props: group1388825Data,
    group13919Props: group139192Data,
    group13936Props: group139362Data,
    group13937Props: group139372Data,
};

const group138885Data = {
    className: "group-13889-1",
};

const group13893Data = {
    group13888Props: group138885Data,
};

const group138886Data = {
    className: "group-13890-1",
};

const group139602Data = {
    className: "group-14034-1",
};

const group139162Data = {
    className: "group-13912-1",
};

const group139603Data = {
    className: "group-13959",
};

const group139604Data = {
    className: "group-13959-1",
};

const group139605Data = {
    className: "group-13959-2",
};

const group139606Data = {
    className: "group-13959-3",
};

const group139607Data = {
    className: "group-13959-4",
};

const group1388826Data = {
    className: "group-13899-4",
};

const group139095Data = {
    className: "group-13909-2",
};

const group139193Data = {
    supportUs: "Support Us",
    group13909Props: group139095Data,
};

const group139212Data = {
    group13919Props: group1388826Data,
    group13919Props2: group139193Data,
};

const group1388827Data = {
    className: "group-13899-5",
};

const group139096Data = {
    className: "group-13909-3",
};

const group139194Data = {
    supportUs: "Contact Us",
    group13909Props: group139096Data,
};

const group140132Data = {
    className: "group-14013",
};

const group139352Data = {
    className: "group-13935-2",
};

const group139363Data = {
    className: "group-13936-2",
};

const group139373Data = {
    className: "group-13937-2",
};

const group14012Data = {
    group13936Props: group139352Data,
    group13936Props2: group139363Data,
    group13937Props: group139373Data,
};

const footerData = {
    group14013Props: group140132Data,
    group14012Props: group14012Data,
};

const ourWorkMainData = {
    finalLogo_Png0111: "/img/final-logo-png-01--1--1-1@2x.png",
    place: "Home",
    aboutUs: "About Us",
    ourWork: "Our Work",
    inNews: "In News",
    supportUs: "Support Us",
    overlapGroup8: "/img/law-books-and-judge-gavel-2@1x.png",
    ourWork2: "Our Work",
    text48: "We provide legal representation to regularly persecuted, vulnerable groups, conduct legal research & pursue constitutional remedies.",
    text49: "The impact that our work has created!",
    text51: "40+",
    spanText: "persons from marginalised communities ",
    spanText2: "released",
    spanText3: " on rightful bail",
    number: "2",
    spanText4: "Law students from  ",
    spanText5: "Vimukta",
    spanText6: " ",
    spanText7: " & Adivasi ",
    spanText8: "communities in Bhopal supported",
    litigation: "Litigation",
    text55: <>The legal representation available within the economic means of those we work with is focused on maintaining the status quo of policing (as that ensures stable income for lawyers) and fails to challenge the structural underpinnings which facilitate continued legal prosecution.<br /><br />We believe a multi-pronged approach to litigation with proactive engagement at the pre-bail and pre-trial stages, with respect to illegal detention, torture, investigation and evidence collection aspects help in better pursuit of justice.</>,
    featuredWork: "Featured Work",
    untitledDesign1: "/img/untitled-design-1-1@2x.png",
    image: "/img/image-43@1x.png",
    text56: "Why Charan Singh Bolts His House From Inside And Out",
    text57: "Read this series to understand how procedural tools are used to perpetrate violence against denotified tribes.",
    text64: "To know more about our work in the domain of Litigation, expand",
    researchAdvocacy: "Research & Advocacy",
    text44: <>We seek to document the structural and institutional modes of marginalisation and oppression against Vimukta communities to ensure that there is a public record and public discourse on the structural violence inflicted by the criminal justice system. There is very little data and analysis available regarding this and we aim to bridge that gap and set precedence for future studies.<br /><br />Policy level changes and constitutional strategies are undertaken to bring systemic changes.</>,
    untitledDesign11: "/img/untitled-design-1--1-2@2x.png",
    text46: "Featured Work - Excise Policing in Madhya Pradesh",
    ongoingWork: "Ongoing Work",
    text45: "The MP assembly has passed the addition of death penalty to the excise act without any discussion. This has serious implications for Vimukta communities who are regularly targeted under this law. We are working with community members and other civil society organisations to make recommendations and fight",
    text47: "Featured Work - Countermapping Pandemic Policing",
    image2: "/img/image-44@1x.png",
    image56: "/img/image-56-2@1x.png",
    text65: "Why It’s So Important to Decongest Madhya Pradesh’s Prisons",
    text66: "Madhya Pradesh’s prisons are presently overcrowded by nearly 180%, with 49,763 incarcerated individuals.",
    readMore: "READ MORE",
    image3: "/img/image-45@1x.png",
    text58: "Countermapping pandemic policing",
    text59: "Study of Sanctioned violence in Madhya Pradesh",
    readMore2: "READ MORE",
    text60: "Pandemic Policng Infographics",
    text61: "Study of Sanctioned violence in Madhya Pradesh",
    readMore3: "READ MORE",
    image55: "/img/image-55-2@1x.png",
    text62: "Pandemic Policing Comic",
    text63: "Study of Sanctioned violence in Madhya Pradesh",
    readMore4: "READ MORE",
    text67: "To know more about our work in the domain of Research & Advocacy, expand",
    capacityBuilding: "Capacity Building",
    text68: "We aim to set better standards of legal practice at trial courts by sharing research and strategies, and by helping create a community of human rights lawyers who recognise the lens of marginalisation so that the change can have a multiplier effect. We believe in empowering communities with alternative forms of justice practices and trained paralegal professionals who can pursue justice beyond incarceration.",
    untitledDesign21: "/img/untitled-design-2--1-2@1x.png",
    untitledDesign41: "/img/untitled-design-4--1@2x.png",
    workWithUs: "Work with us",
    text70: <>If you believe in our approach and work and want to join the movement in any capacity, we would love to hear from you.<br /><br />Do drop us a line!</>,
    group13893Props: group13893Data,
    group13888Props: group138886Data,
    group13960Props: group139602Data,
    group13916Props: group139162Data,
    group139602Props: group139603Data,
    group139603Props: group139604Data,
    group139604Props: group139605Data,
    group139605Props: group139606Data,
    group139606Props: group139607Data,
    group13921Props: group139212Data,
    group138882Props: group1388827Data,
    group13919Props: group139194Data,
    footerProps: footerData,
};

const group138888Data = {
    className: "group-13889-2",
};

const group138932Data = {
    className: "group-13893-2",
    group13888Props: group138888Data,
};

const group138889Data = {
    className: "group-13890-2",
};

const group14006Data = {
    group13893Props: group138932Data,
    group138882Props2: group138889Data,
};

const group1388828Data = {
    className: "group-13888-2",
};

const group139165Data = {
    className: "group-13917",
};

const group139166Data = {
    className: "group-13918",
};

const group1388829Data = {
    className: "group-13899-6",
};

const group13888210Data = {
    className: "group-13899-7",
};

const group139167Data = {
    className: "group-13913",
};

const group139168Data = {
    className: "group-13914",
};

const group139169Data = {
    className: "group-13915",
};

const group13888211Data = {
    className: "group-13899-8",
};

const group139608Data = {
    className: "group-13965",
};

const group14020Data = {
    group13960Props: group139608Data,
};

const group1391611Data = {
    className: "group-13912-3",
};

const group139609Data = {
    className: "group-13965-1",
};

const group140202Data = {
    className: "group-14021",
    group13960Props: group139609Data,
};

const group1396010Data = {
    className: "group-13965-2",
};

const group140203Data = {
    className: "group-14022",
    group13960Props: group1396010Data,
};

const group13888212Data = {
    className: "group-13899-9",
};

const group139097Data = {
    className: "group-13909-4",
};

const group139195Data = {
    supportUs: "Support Us",
    group13909Props: group139097Data,
};

const group139213Data = {
    group13919Props: group13888212Data,
    group13919Props2: group139195Data,
};

const group13888213Data = {
    className: "group-13899-10",
};

const group139098Data = {
    className: "group-13909-5",
};

const group139196Data = {
    supportUs: "Contact Us",
    group13909Props: group139098Data,
};

const group140133Data = {
    className: "",
};

const group139353Data = {
    className: "group-13935-3",
};

const group139364Data = {
    className: "group-13936-3",
};

const group139374Data = {
    className: "group-13937-3",
};

const group140122Data = {
    group13936Props: group139353Data,
    group13936Props2: group139364Data,
    group13937Props: group139374Data,
};

const footer2Data = {
    className: "footer-1",
    group14013Props: group140133Data,
    group14012Props: group140122Data,
};

const homepageMain1Data = {
    name: <>Justice <br />begins where<br />inequality ends.</>,
    text77: "The very existence of the prison forecloses the kinds of discussions that we need in order to imagine the possibility of eradicating these behavior.",
    image: "/img/image-2@1x.png",
    place: "Home",
    aboutUs: "About Us",
    ourWork: "Our Work",
    inNews: "In News",
    supportUs: "Support Us",
    finalLogo_Png0111: "/img/final-logo-png-01--1--1-1@2x.png",
    aboutUs2: "About Us",
    spanText: "The CPA Project is a ",
    spanText2: "litigation, research and capacity-building intervention",
    spanText3: "committed to ending the disproportionate targeting of marginalisedcommunities by the criminal justice system.",
    img1: "/img/img-1@1x.png",
    whatDoWeDo: "What do we do?",
    text78: "We use data-driven research and human rights lawyering to help vulnerable & historicallymarginalised communities advocate for decriminalisation and decarceration.",
    learnMore: "LEARN MORE",
    untitledDesign1: "/img/untitled-design-1@2x.png",
    untitledDesign11: "/img/untitled-design-1--1@2x.png",
    untitledDesign21: "/img/untitled-design-2--1@2x.png",
    featuredWork: "Featured Work",
    spanText4: "Drunk on Power – ",
    spanText5: "A Study of Excise Policing in Madhya Pradesh",
    image2: "/img/image-3@1x.png",
    image3: "/img/image@1x.png",
    spanText6: "Countermapping Pandemic Policing ",
    spanText7: "Sanctioned violence in Madhya Pradesh",
    image4: "/img/image-1@1x.png",
    spanText8: "Countermapping Pandemic Policing ",
    spanText9: "Sanctioned violence in Madhya Pradesh",
    readMore: "READ MORE",
    readMore2: "READ MORE",
    readMore3: "READ MORE",
    latestNews: "Latest News",
    inLatestNews: "In Latest News",
    text93: "Why Madhya Pradesh’s new liquor law fails to address casteist, colonial policing",
    phone: "09/09/2021",
    image5: "/img/picture2.png",
    readMore4: "READ MORE",
    text94: "Over 64 % of Accused under Excise Laws are SC/ST, Nomadic Tribes in MP",
    phone2: "09/09/2021",
    image6: "/img/picture3.png",
    readMore5: "READ MORE",
    text95: "Construction(s) of Female Criminality: Gender, Caste and State Violence",
    phone3: "04/09/2021",
    rectangle53: "/img/rectangle-53@2x.png",
    readMore6: "READ MORE",
    
    untitledDesign41: "/img/untitled-design-4--1@2x.png",
    workWithUs: "Work with us",
    text105: <>If you believe in our approach and work and want to join the movement in any capacity, we would love to hear from you.<br /><br />Do drop us a line!</>,
    group14006Props: group14006Data,
    group138882Props: group1388828Data,
    group13916Props: group139165Data,
    group139162Props: group139166Data,
    group1388822Props: group1388829Data,
    group1388823Props: group13888210Data,
    group139163Props: group139167Data,
    group139164Props: group139168Data,
    group139165Props: group139169Data,
    group1388824Props: group13888211Data,
    group14020Props: group14020Data,
    group139166Props: group1391611Data,
    group140202Props: group140202Data,
    group140203Props: group140203Data,
    group13921Props: group139213Data,
    group1388825Props: group13888213Data,
    group13919Props: group139196Data,
    footerProps: footer2Data,
};

const group140342Data = {
    className: "group-14034-2",
};

const group140343Data = {
    className: "group-14034-3",
};

const group140344Data = {
    className: "group-14034-4",
};

const group140345Data = {
    className: "group-14034-5",
};

const group140346Data = {
    className: "group-14034-6",
};

const group140347Data = {
    className: "group-14024",
};

const group1396011Data = {
    className: "group-13959-5",
};

const group1387732Data = {
    className: "group-13877-4",
};

const group140348Data = {
    className: "group-14024-1",
};

const group1388810Data = {
    className: "group-13899",
};

const group139099Data = {
    className: "group-13909-6",
};

const group1396012Data = {
    className: "group-13965-3",
};

const group13888214Data = {
    className: "group-13899-11",
};

const group1390910Data = {
    className: "group-13909-7",
};

const group139197Data = {
    supportUs: "Support Us",
    group13909Props: group1390910Data,
};

const group139214Data = {
    group13919Props: group13888214Data,
    group13919Props2: group139197Data,
};

const group140134Data = {
    className: "",
};

const group139354Data = {
    className: "group-13935-4",
};

const group139365Data = {
    className: "group-13936-4",
};

const group139375Data = {
    className: "group-13937-4",
};

const group140123Data = {
    group13936Props: group139354Data,
    group13936Props2: group139365Data,
    group13937Props: group139375Data,
};

const footer3Data = {
    className: "footer-2",
    group14013Props: group140134Data,
    group14012Props: group140123Data,
};

const inNewsData = {
    inNews: "In News",
    text108: "The Latest from the CPA Project!",
    articles: "Articles",
    image: "/img/image-20@2x.png",
    text109: <>Why Madhya Pradesh’s new liquor law fails to address casteist, <br />colonial policing</>,
    scrollIn: "Scroll.in",
    overlapGroup1: "/img/image-21@2x.png",
    newsclick: "NewsClick",
    text110: "Over 64 % of Accused under Excise Laws are SC/ST, Nomadic Tribes in MP",
    image2: "/img/image-20@2x.png",
    image3: "/img/image-23@2x.png",
    text111: <>On Policing In Pandemic, Mindless Arrests <br />&amp; Prison <br />Overcrowding</>,
    liveLaw: "Live Law",
    image4: "/img/image-20@2x.png",
    rectangle71: "/img/rectangle-71@2x.png",
    text112: "Construction(s) of Female Criminality: Gender, Caste and State Violence",
    epw: "EPW",
    image5: "/img/image-20@2x.png",
    image6: "/img/image-26@2x.png",
    text113: "How MP Excise Act systemically targets SC, ST, Vimukta communities",
    thePrint: "The Print",
    overlapGroup5: "/img/ana-1-125-1@1x.png",
    text114: "‘Drunk on power’: Study suggests alcohol policing in Madhya Pradesh targets people based on caste",
    scrollIn2: "Scroll.in",
    finalLogo_Png0111: "/img/final-logo-png-01--1--1-1@2x.png",
    place: "Home",
    aboutUs: "About Us",
    ourWork: "Our Work",
    inNews2: "In News",
    supportUs: "Support Us",
    discussions: "Discussions",
    group14049: "/img/image-48@1x.png",
    text117: "‘Drunk on power’: Study suggests alcohol policing in Madhya Pradesh targets people based on caste",
    liveLaw2: "Live Law",
    image51: "/img/image-51@2x.png",
    image7: "/img/image-27@2x.png",
    image8: "/img/image-28@2x.png",
    image50: "/img/image-50@2x.png",
    number: "1",
    number2: "2",
    number3: "3",
    number4: "4",
    text116: "....",
    number5: "20",
    workWithUs: "Work with us",
    text119: <>If you believe in our approach and work and want to join the movement in any capacity, we would love to hear from you.<br /><br />Do drop us a line!</>,
    contactUs: "Contact Us",
    untitledDesign41: "/img/untitled-design-4--1@2x.png",
    group14034Props: group140342Data,
    group140342Props: group140343Data,
    group140343Props: group140344Data,
    group140344Props: group140345Data,
    group140345Props: group140346Data,
    group140346Props: group140347Data,
    group13960Props: group1396011Data,
    group138773Props: group1387732Data,
    group140347Props: group140348Data,
    group13888Props: group1388810Data,
    group13909Props: group139099Data,
    group139602Props: group1396012Data,
    group13921Props: group139214Data,
    footerProps: footer3Data,
};

const group1407811Data = {
    className: "",
};

const group140833Data = {
    text2: <>On Policing In Pandemic, Mindless Arrests &amp; Prison <br />Overcrowding</>,
    group14078Props: group1407811Data,
};

const group1407812Data = {
    className: "",
};

const group140834Data = {
    text2: "Construction(s) of Female Criminality: Gender, Caste and State Violence",
    group14078Props: group1407812Data,
};

const group1407813Data = {
    className: "",
};

const group140835Data = {
    text2: "How MP Excise Act systemically targets SC, ST, Vimukta communities",
    group14078Props: group1407813Data,
};

const group1407814Data = {
    className: "",
};

const group140836Data = {
    text2: "Over 64 % of Accused under Excise Laws are SC/ST, Nomadic Tribes in MP",
    group14078Props: group1407814Data,
};

const group1407815Data = {
    className: "group-14078-2",
};

const group14102Data = {
    group14078Props: group1407815Data,
};

const group140632Data = {
    className: "group-14063-2",
};

const group1407816Data = {
    className: "group-14078-3",
};

const group140837Data = {
    text2: <>PLACEHOLDER TEXT<br />PLEASE USE VIDEO TITLE</>,
    className: "group-14083-3",
    group14078Props: group1407816Data,
};

const group1407817Data = {
    className: "group-14078-4",
};

const group141022Data = {
    className: "group-14102-2",
    group14078Props: group1407817Data,
};

const group1407818Data = {
    className: "group-14078-5",
};

const group140838Data = {
    text2: "Why It’s So Important to Decongest M.P’s Prisons",
    className: "group-14083-4",
    group14078Props: group1407818Data,
};

const group1390911Data = {
    className: "group-14064-2",
};

const group14098Data = {
    group13909Props: group1390911Data,
};

const group1390912Data = {
    className: "group-14064-3",
};

const group140952Data = {
    className: "group-14095-1",
    group13909Props: group1390912Data,
};

const group14100Data = {
    group14095Props: group140952Data,
};

const mobileInNewsMainData = {
    inNews: "In News",
    text7: <>The Latest from the <br />CPA Project!</>,
    image: "/img/image-25@2x.png",
    text1: "Why M.P’s new liquor law fails to address casteist, colonial policing",
    image2: "/img/image@2x.png",
    image3: "/img/image@2x.png",
    rectangle53: "/img/rectangle-53@2x.png",
    image4: "/img/image-3@2x.png",
    image5: "/img/image@2x.png",
    rectangle532: "/img/rectangle-53@2x.png",
    image6: "/img/image@2x.png",
    image7: "/img/image-7@2x.png",
    image8: "/img/image-8@2x.png",
    image9: "/img/image@2x.png",
    image10: "/img/image-7@2x.png",
    articles: "Articles",
    image11: "/img/image-24@2x.png",
    number: "1",
    number2: "2",
    number3: "3",
    number4: "4",
    text10: "....",
    number5: "20",
    finalLogo_Png0111: "/img/final-logo-png-01--1--1@2x.png",
    discussions: "Discussions",
    image12: "/img/image@2x.png",
    image13: "/img/image-7@2x.png",
    image51: "/img/image-51@2x.png",
    image14: "/img/image-19@2x.png",
    image48: "/img/image-48@2x.png",
    number6: "1",
    number7: "2",
    number8: "3",
    number9: "4",
    text11: "....",
    number10: "20",
    image15: "/img/image@2x.png",
    rectangle533: "/img/rectangle-53-2@2x.png",
    image56: "/img/image-56@2x.png",
    group14083Props: group140833Data,
    group140832Props: group140834Data,
    group140833Props: group140835Data,
    group140834Props: group140836Data,
    group14102Props: group14102Data,
    group14083Props2: group140632Data,
    group140835Props: group140837Data,
    group141022Props: group141022Data,
    group140836Props: group140838Data,
    group14102Props2: group14098Data,
    group14102Props3: group14100Data,
};

const group140633Data = {
    className: "group-14063-3",
};

const group138772Data = {
    className: "group-13877-1",
};

const group14102222Data = {
    className: "group-14102",
};

const group1388812Data = {
    className: "group-13889-3",
};

const group141033Data = {
    text64: "50+",
    spanText: "persons provided with ",
    spanText2: "quality representation",
    spanText3: <> in <br />district courts</>,
    group13888Props: group1388812Data,
};

const group1388813Data = {
    className: "group-13890-3",
};

const group141034Data = {
    text64: "2",
    spanText: "Law students from ",
    spanText2: "Vimukta & Adivasi ",
    spanText3: "communities in Bhopal supported",
    className: "group-14104",
    group13888Props: group1388813Data,
};

const group1407820Data = {
    className: "",
};

const group14079Data = {
    text68: "Why It’s So Important to Decongest M.P’s Prisons",
    group14078Props: group1407820Data,
};

const group141025Data = {
    group14079Props: group14079Data,
};

const group1407821Data = {
    className: "",
};

const group140792Data = {
    text68: "Why It’s So Important to Decongest M.P’s Prisons",
    group14078Props: group1407821Data,
};

const group1410252Data = {
    group14079Props: group140792Data,
};

const group1407822Data = {
    className: "group-14078-6",
};

const group1407823Data = {
    className: "",
};

const group140793Data = {
    text68: "Drunk on Power Report : Study of Excise Policing in Madhya Pradesh",
    group14078Props: group1407823Data,
};

const group1410253Data = {
    className: "group-14102-7",
    group14079Props: group140793Data,
};

const group1407824Data = {
    className: "",
};

const group140794Data = {
    text68: "Countermapping pandemic policing Study of Sanctioned violence in M.P.",
    group14078Props: group1407824Data,
};

const group1410254Data = {
    className: "group-14102-8",
    group14079Props: group140794Data,
};

const group1407825Data = {
    className: "group-14078-7",
};

const group140795Data = {
    text68: <>Countermapping pandemic policing:<br />Comic</>,
    className: "group-14079-11",
    group14078Props: group1407825Data,
};

const group141022222Data = {
    group14079Props: group140795Data,
};

const group1407826Data = {
    className: "group-14078-8",
};

const group140796Data = {
    text68: <>Countermapping pandemic policing:<br />Infographics</>,
    className: "group-14079-12",
    group14078Props: group1407826Data,
};

const group141022223Data = {
    className: "group-14102-10",
    group14079Props: group140796Data,
};

const group139124Data = {
    className: "group-13912-7",
};

const group139125Data = {
    className: "group-13912-8",
};

const group1390913Data = {
    className: "group-14064-4",
};

const group140982Data = {
    className: "group-14098-1",
    group13909Props: group1390913Data,
};

const group1390914Data = {
    className: "group-14064-5",
};

const group140953Data = {
    className: "group-14095-2",
    group13909Props: group1390914Data,
};

const group141002Data = {
    className: "group-14100-1",
    group14095Props: group140953Data,
};

const group141012Data = {
    className: "group-14101-1",
};

const mobileAboutUsMain22Data = {
    lawBooksAndJudgeGavel3: "/img/law-books-and-judge-gavel-3@1x.png",
    ourWork: "Our Work",
    text58: "We provide legal representation to regularly persecuted, vulnerable groups, conduct legal research & pursue constitutional remedies.",
    finalLogo_Png0111: "/img/final-logo-png-01--1--1@2x.png",
    c: "/img/group-14063@2x.svg",
    text66: "The impact that our work has created!",
    spanText: "To know more about our work in the domain of Litigation, ",
    spanText2: "expand",
    text60: <>The legal representation available within the economic means of those we work with is focused on maintaining the status quo of policing (as that ensures stable income for lawyers) and fails to challenge the structural underpinnings which facilitate continued legal prosecution.<br /><br />We believe a multi-pronged approach to litigation with proactive engagement at the pre-bail and pre-trial stages, with respect to illegal detention, torture, investigation and evidence collection aspects help in better pursuit of justice.</>,
    untitledDesign3: "/img/untitled-design-3@2x.png",
    litigation: "Litigation",
    featuredWork: "Featured Work",
    image: "/img/image-25@2x.png",
    text67: "Why Charan Singh Bolts His House From Inside And Out",
    image2: "/img/image-24@2x.png",
    image56: "/img/image-56@2x.png",
    image562: "/img/image-56@2x.png",
    text74: <>We seek to document the structural and institutional modes of marginalisation and oppression against Vimukta communities to ensure that there is a public record and public discourse on the structural violence inflicted by the criminal justice system. There is very little data and analysis available regarding this and we aim to bridge that gap and set precedence for future studies.<br /><br />Policy level changes and constitutional strategies are undertaken to bring systemic changes.</>,
    text75: "The MP assembly has passed the addition of death penalty to the excise act without any discussion. This has serious implications for Vimukta communities who are regularly targeted under this law. We are working with community members and other civil society organisations to make recommendations and fight",
    untitledDesign11: "/img/untitled-design-1--1-1@2x.png",
    researchAdvocacy: <>Research &amp; <br />Advocacy</>,
    text76: <>Featured Work - <br />Excise Policing in<br />Madhya Pradesh</>,
    text77: "Featured Work - Countermapping Pandemic Policing",
    ongoingWork: "Ongoing Work",
    image3: "/img/image-25@2x.png",
    text78: <>Drunk on Power:<br />Explainer Video</>,
    image4: "/img/image-24@2x.png",
    image5: "/img/image-22@2x.png",
    image6: "/img/image-23@2x.png",
    spanText6: "To know more about our work in the domain of Capacity Building, ",
    spanText7: "expand",
    text84: "We aim to set better standards of legal practice at trial courts by sharing research and strategies, and by helping create a community of human rights lawyers who recognise the lens of marginalisation so that the change can have a multiplier effect. We believe in empowering communities with alternative forms of justice practices and trained paralegal professionals who can pursue justice beyond incarceration.",
    untitledDesign21: "/img/untitled-design-2--1-1@2x.png",
    text62: <>Capacity <br />Building</>,
    spanText4: "To know more about our work in the domain of Capacity Building, ",
    spanText5: "expand",
    group14063Props: group140633Data,
    group14103Props: group138772Data,
    group14078Props: group14102222Data,
    group14103Props2: group141033Data,
    group141032Props: group141034Data,
    group14102Props: group141025Data,
    group141022Props: group1410252Data,
    group14078Props2: group1407822Data,
    group141023Props: group1410253Data,
    group141024Props: group1410254Data,
    group141022Props2: group141022222Data,
    group1410222Props: group141022223Data,
    group13912Props: group139124Data,
    group139122Props: group139125Data,
    group14100Props: group140982Data,
    group14100Props2: group141002Data,
    group14100Props3: group141012Data,
};

const group140682Data = {
    className: "group-14068-1",
};

const group140634Data = {
    className: "group-14063-4",
};

const group138774Data = {
    className: "group-13877-2",
};

const group1390915Data = {
    className: "group-14064-6",
};

const group1390916Data = {
    className: "group-14064-7",
};

const group140954Data = {
    className: "group-14095-3",
    group13909Props: group1390916Data,
};

const group141003Data = {
    className: "group-14100-2",
    group14095Props: group140954Data,
};

const mobileAboutUsMain2Data = {
    aboutUs: "About Us",
    text107: <>The Criminal Justice and Police Accountability Project (CPA Project) was founded in 2019 as a litigation, research and capacity-building intervention committed to ending the disproportionate targeting of marginalise`d communities by the criminal justice system.<br /><br />These communities include those previously officially criminalised under colonial laws, now classified as Denotified Tribal (DNT) Communities or Vimukta communities, as well as other communities that are similarly persecuted and stigmatised.</>,
    finalLogo_Png0111: "/img/final-logo-png-01--1--1@2x.png",
    ourTeam: "Our Team",
    image: "/img/image-63@2x.png",
    d10E4360684B11EaA6Ac9122541Af2042: "/img/d10e4360-684b-11ea-a6ac-9122541af204-2@1x.png",
    text108: "Why do we do this work?",
    spanText: "I",
    spanText2: "n 1871, the British colonial authorities enacted the Criminal Tribes Act to brand several nomadic and tribal communities as ‘hereditary criminals’ habituated to a life of crime. These communities were then subjugated as the ‘objects of policing’. Their freedoms, livelihoods and cultures were entirely suppressed through extensive surveillance and state control, including forced ‘reformatory’ settlements, coerced collection of personal data, separation of children from families etc.",
    spanText3: "E",
    spanText4: "ven though this Act was repealed in 1952, the taint of criminality has persisted through vague laws and arbitrary police powers. They are often charged with false or petty cases, or cases of theft and house-breaking even in the absence of evidence. Many are perpetually trapped in the criminal justice system and are extremely vulnerable to extrajudicial police violence, harassment, extortion and sexual assault.",
    image2: "/img/image-64@2x.png",
    image3: "/img/image-65@2x.png",
    image4: "/img/image-66@2x.png",
    image5: "/img/image-4@2x.png",
    image6: "/img/image-5@2x.png",
    image7: "/img/image-6@2x.png",
    image8: "/img/image-70@2x.png",
    text111: "We are also supported by a rolling team of 4-6 paid interns and volunteers.",
    supportUs: "Support Us",
    text112: <>The CPA Project is committed to ending mass incarceration and excessive punishment, challenging caste-based systemic injustices and targetting. <br /><br />Support our work!</>,
    supportUs2: "SUPPORT US",
    followUs: "Follow Us",
    ourWork: "OUR WORK",
    litigation: "Litigation",
    researchAdvocacy: "Research &Advocacy",
    capacityBuilding: "Capacity Building",
    resources: "Resources",
    spanText5: <>The CPA Project,<br /></>,
    spanText6: "Bhopal, MP - 300101",
    text115: "2021 – CPA Project. All rights reserved.",
    group14063Props: group140682Data,
    group14063Props2: group140634Data,
    group13877Props: group138774Data,
    group14063Props3: group1390915Data,
    group14100Props: group141003Data,
};

