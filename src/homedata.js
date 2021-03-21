import image1 from "./images/svg-1.svg";
import image2 from "./images/svg-2.svg";
import image3 from "./images/svg-3.svg";

export const homeData = [
  {
    id: "about",
    bgLight: false,
    topLine: "Premium Bank",
    headLine: "Unlimted Transactions with zero fees",
    description: `Get access to out exclusive app that allows you to send unlimted
    transactions without gettign charged any fees`,
    btnText: "Get Started",
    btnDark: false,
    image: image1,
    imageAlt: "car",
    imageStart: true,
  },
  {
    id: "discover",
    bgLight: true,
    topLine: "Unlimited Access",
    headLine: "Login to your account at any time",
    description: `We have you covered no matter where you are located. All you need is an internet connection and a phone or a computer.`,
    btnText: "Learn More",
    btnDark: true,
    image: image2,
    imageAlt: "car",
    imageStart: false,
  },
  {
    id: "signup",
    bgLight: true,
    topLine: "Join our Team",
    headLine: "Creating an account is extremely easy",
    description: `Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.`,
    btnText: "Start Now",
    btnDark: true,
    image: image3,
    imageAlt: "car",
    imageStart: true,
  },
];
