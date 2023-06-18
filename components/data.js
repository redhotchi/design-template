import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "우리의 주요 기술",
  desc: "주요기술 설명",
  image: benefitOneImg,
  bullets: [
    {
      title: "Frontend",
      desc: "Flutter, ReactJS, Javascript, Typescript",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Backend",
      desc: "Node.js, SpringBoot(Java)",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Authentication",
      desc: "JWT",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Database",
      desc: "Oracle, MySQL, PostgreSQL, MongoDB, Redis",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "주요 PRODUCTS",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "정부기능분류시스템(BRM) 구축 및 유지보수",
      desc: "정부기능분류시스템(BRM) 구축 및 유지보수",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "지자체기능분류시스템(BRM) 구축 및 유지보수",
      desc: "지자체기능분류시스템(BRM) 구축 및 유지보수",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "정부지식관리시스템(GKMC) 구축 및 유지보수",
      desc: "정부지식관리시스템(GKMC) 구축 및 유지보수",
      icon: <SunIcon />,
    },
    {
      title: "공직윤리종합정보시스템(PETI) 유지보수 및 운영",
      desc: "공직윤리종합정보시스템(PETI) 유지보수 및 운영",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
