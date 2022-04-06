import fb from "../assets/facebook.svg";
import ig from "../assets/instagram.svg";
import tw from "../assets/twitter.svg";
import ln from "../assets/linkedin.svg";

export const LEVELS = ["intern", "beginner", "intermediate", "expert"];
export const ROLES = ["copywriter", "designer", "strategist", "content"];

export const NAV_ITEMS = [
  {
    id: 0,
    title: "About",
    path: "/about",
  },
  {
    id: 1,
    title: "Services",
    path: "/services",
  },
];

export const CONTACT_ITEMS = [
  {
    id: 0,
    title: "+01 2333 1222 21",
    path: "tel: +01 2333 1222 21",
  },
  {
    id: 1,
    title: "hello@zedi.africa",
    path: "mailto:hello@zedi.africa",
  },
  {
    id: 2,
    title: "7, Akin George Street, Obanikoro Estate, Obanikoro,Lagos.",
    path: "/",
  },
];

export const SOCIAL_ITEMS = [
  {
    id: "facebook",
    icon: fb,
    link: "https://m.facebook.com/Zedi-Africa-105144468785510/",
  },
  {
    id: "twitter",
    icon: tw,
    link: "https://twitter.com/zediafrica?s=11",
  },
  {
    id: "instagram",
    icon: ig,
    link: "https://instagram.com/zediafrica?utm_medium=copy_link",
  },
  {
    id: "linkedin",
    icon: ln,
    link: "https://www.linkedin.com/company/zedi-africa/",
  },
];
