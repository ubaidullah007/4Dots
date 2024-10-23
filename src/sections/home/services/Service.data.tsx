import webDevelopment from "../../../../src/images/webDevelopment.svg";
import appDevelopment from "../../../../src/images/app.svg";
import ecommerceImage from "../../../../src/images/Ecommerce.svg";
import blockchain from "../../../../src/images/blockchain.svg";
import gameDevelopment from "../../../../src/images/gamedevelopment.svg";
import salesforce from "../../../../src/images/salesforce.svg";
import ai from "../../../../src/images/Ai.svg";
import iot from "../../../../src/images/Iot.svg";
import devops from "../../../../src/images/devOps.svg";

import {
  AlexaSkills,
  AndroidICon,
  AppleIcon,
  AugmentedReality,
  Aws,
  Azure,
  Bigcommerce,
  BusinessInteligence,
  CakePhp,
  CasualGames,
  DataAnalytics,
  DataForcasting,
  DC,
  Digital_ocean,
  Drupal,
  EmbededSoftware,
  Ethereum,
  FlutterIcon,
  Google_cloud,
  Hyperledger,
  IonicIcon,
  IotApps,
  IotDashboard,
  IotDashboardd,
  IotDashboarddd,
  IotHardware,
  KotlinIcon,
  LaravelIcon,
  Magento,
  Metaverse,
  NaturalLanguage,
  NFTMarket,
  PhpIcon,
  Prestashop,
  PrivateBlockchain,
  ReactNative,
  Saleforce,
  SmartContract,
  TextToSpeach,
  Ubercart,
  Unity3d,
  VirtualReality,
  Virtuemart,
  Wordpress,
  Keywordresearch,
  Onpageseo,
  Technicalseo,
  Localseo,
  Analyticsa,

} from "@/svg";

export const SERVICES_DATA = [
  {
    image: appDevelopment,
    title: "Mobile App Development",
    link: "/app-development",
    tecList: [
      {
        icon: <AndroidICon />,
        text: "Android App",
      },
      {
        icon: <AppleIcon />,
        text: "iOS App",
      },
      {
        icon: <FlutterIcon />,
        text: "Flutter",
      },
      {
        icon: <ReactNative />,
        text: "React Native",
      },
      {
        icon: <KotlinIcon />,
        text: "Kotlin",
      },
      {
        icon: <IonicIcon />,
        text: "Ionic",
      },
    ],
  },
  {
    image: webDevelopment,
    title: "Website Development",
    link: "/web-development",

    tecList: [
      {
        icon: <PhpIcon />,
        text: "PHP",
      },
      {
        icon: <Wordpress />,
        text: "WordPress",
      },
      {
        icon: <Drupal />,
        text: "Drupal",
      },
      {
        icon: <CakePhp />,
        text: "CakePHP",
      },
      {
        icon: <LaravelIcon />,
        text: "Laravel",
      },
    ],
  },
  {
    image: ecommerceImage,
    title: "Digital Marketing",
    link: "/digital-marketing",

    tecList: [
      {
        icon: <Magento />,
        text: "Social Media Marketing",
      },
      {
        icon: <Bigcommerce />,
        text: "Branding",
      },
      {
        icon: <Ubercart />,
        text: "Content Creation",
      },
      {
        icon: <Prestashop />,
        text: "Google Ads",
      },
      {
        icon: <Virtuemart />,
        text: "SEO",
      },
    ],
  },
  {
    image: blockchain,
    title: "Graphic Designing",
    link: "/graphic-designing",

    tecList: [
      {
        
        icon: <Ethereum />,
        text: "Logo Design",
      },
      {
        icon: <Hyperledger />,
        text: "Web Graphics",
      },
      {
        icon: <SmartContract />,
        text: "Brand Identity",
      },
        {
        icon: <PrivateBlockchain />,
        text: "Print Design",
      },
      {
        icon: <NFTMarket />,
        text: "Social Media",
      },
    ],
  },
  {
    image: gameDevelopment,
    title: "Software Development",
    link: "/software-development",

    tecList: [
      {
        
        icon: <Unity3d />,
        text: "Database Design",
      },
      {
        icon: <AugmentedReality />,
        text: "Frontend Development",
      },
      {
        icon: <VirtualReality />,
        text: "Backend Development",
      },
      {
        icon: <CasualGames />,
        text: "E-commerce Solutions",
      },
      {
        icon: <Metaverse />,
        text: "IoT Development",
      },
    ],
  },
  {
    image: salesforce,
    title: "Search Engine Optimization",
    link: "/seo",

    tecList: [
      {
        icon: <Keywordresearch />,
        text: "Keyword Research",
      },
      {
        icon: <Onpageseo />,
        text: "On-Page SEO",
      },
      {
        icon: <Technicalseo/>,
        text: "Technical SEO",
      },
      {
        icon: <Localseo/>,
        text: "Local SEO",
      },
      {
        icon: <Analyticsa/>,
        text: "Analytics and Monitoring",
      },
    ],
  },
  {
    image: ai,
    title: "UI & UX Designing",
    link: "/ui-ux-designing",

    tecList: [
      {
        icon: <TextToSpeach />,
        text: "Visual Design",
      },
      {
        icon: <BusinessInteligence />,
        text: "Responsive Design",
      },
      {
        icon: <DataForcasting />,
        text: "Mobile-First Design",
      },
      {
        icon: <NaturalLanguage />,
        text: "Gestures and Interactions",
      },
      {
        icon: <DataAnalytics />,
        text: "Color Psychology",
      },
      {
        icon: <AlexaSkills />,
        text: "User Onboarding",
      },
    ],
  },
  {
    image: iot,
    title: "Domain & Hosting",
    link: "/domain-and-hosting",

    tecList: [
      {
        icon: <IotApps />,
        text: "Domain Name Registration",
      },
      {
        icon: <EmbededSoftware />,
        text: "Domain Extension",
      },
      {
        icon: <IotHardware />,
        text: "Domain Privacy Protection",
      },
      {
        icon: <IotDashboard />,
        text: "Web Hosting",
      },
      {
        icon: <IotDashboardd />,
        text: "Shared Hosting",
      },
      {
        icon: <IotDashboarddd />,
        text: "Dedicated Hosting",
      },
    ],
  },
  {
    image: devops,
    title: "Product Photoshoot",
    link: "/product-photoshoot",

    tecList: [
      {
        icon: <Aws />,
        text: "Concept & Planning",
      },
      {
        icon: <Azure />,
        text: "Product Showcase",
      },
      {
        icon: <DC />,
        text: "Quality & Detail",
      },
      {
        icon: <Digital_ocean />,
        text: "Creativity",
      },
      {
        icon: <Google_cloud />,
        text: "Image Retouching",
      },
    ],
  },
];
