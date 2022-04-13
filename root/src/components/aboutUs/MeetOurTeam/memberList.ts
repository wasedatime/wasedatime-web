import akylai from "@app/assets/img/contributors/akylai.jpg";
import alina from "@app/assets/img/contributors/alina.jpg";
import austin from "@app/assets/img/contributors/austin.jpg";
import george from "@app/assets/img/contributors/george.jpg";
import gu from "@app/assets/img/contributors/gu.jpg";
import hao from "@app/assets/img/contributors/hao.jpg";
import hatori from "@app/assets/img/contributors/hatori.jpg";
import isabella from "@app/assets/img/contributors/isabella.jpg";
import jason from "@app/assets/img/contributors/jason.jpg";
import kaede from "@app/assets/img/contributors/kaede.jpg";
import kaiqing from "@app/assets/img/contributors/kaiqing.jpg";
import kong from "@app/assets/img/contributors/kong.jpg";
import mei from "@app/assets/img/contributors/mei.jpg";
import naomi from "@app/assets/img/contributors/naomi.jpg";
import nicholas from "@app/assets/img/contributors/nicholas.jpg";
import oscar from "@app/assets/img/contributors/oscar.jpg";
import takumi from "@app/assets/img/contributors/takumi.jpg";
import tang from "@app/assets/img/contributors/tang.jpg";
import xinmei from "@app/assets/img/contributors/xinmei.jpg";
import xinyue from "@app/assets/img/contributors/xinyue.jpg";
import yaoyuan from "@app/assets/img/contributors/yaoyuan.jpg";
import zenda from "@app/assets/img/contributors/zenda.jpg";
import zhaohuaibo from "@app/assets/img/contributors/zhaohuaibo.jpg";
import email from "@app/assets/img/socialmediaicon/email.png";
import facebook from "@app/assets/img/socialmediaicon/facebook.png";
import github from "@app/assets/img/socialmediaicon/github.png";
import homepage from "@app/assets/img/socialmediaicon/homepage.png";
import instagram from "@app/assets/img/socialmediaicon/instagram.png";
import linkedin from "@app/assets/img/socialmediaicon/linkedin.png";
import weibo from "@app/assets/img/socialmediaicon/sina-weibo.png";
import twitter from "@app/assets/img/socialmediaicon/twitter.png";

export interface Members {
  image: string;
  name: string;
  position: string;
  socials?: Array<{ platform: string; link: string }>;
  profileText?: string;
}

export const CurrentList: Array<Members> = [
  // hao
  {
    image: hao,
    name: "Hao",
    position: "Project Leader",
    socials: [
      { platform: github, link: "https://github.com/YHhaoareyou" },
      { platform: facebook, link: "https://www.facebook.com/hao8711/" },
      {
        platform: instagram,
        link: "https://www.instagram.com/yh_hao_are_you/",
      },
    ],
    profileText: "WasedaTime, a better Waseda life",
  },
  // austin
  {
    image: austin,
    name: "Austin Zhu",
    position: "Project Co-leader",
    socials: [
      { platform: instagram, link: "https://www.instagram.com/austinzhu123/" },
      { platform: homepage, link: "https://austinzhu.dev/" },
      {
        platform: linkedin,
        link: "https://www.linkedin.com/in/yiming-zhu-622a98152",
      },
    ],
    profileText: "WasedaTime is gonna be legendary.",
  },
  // jason
  {
    image: jason,
    name: "Jason Park",
    position: "Backend Engineer & Marketing",
    socials: [
      {
        platform: linkedin,
        link: "https://www.linkedin.com/in/%E6%B5%9A%E5%BD%AC-%E6%9C%B4-a9a503200",
      },
    ],
    profileText: "Imagine Sisyphus happy.",
  },
  // nicholas
  {
    image: nicholas,
    name: "Nicholas Narmada",
    position: "Frontend Engineer",
    socials: [
      { platform: instagram, link: "https://www.instagram.com/nichnarmada/" },
      { platform: github, link: "https://github.com/nichnarmada" },
      { platform: linkedin, link: "https://www.linkedin.com/in/nichnarmada/" },
    ],
    profileText:
      "People call me the Pro Pro, aka the Professional Procrastinator 🙂",
  },
  // takumi
  {
    image: takumi,
    name: "Takumi",
    position: "IOS Engineer",
    socials: [
      { platform: instagram, link: "https://www.instagram.com/ronin2_7/" },
    ],
  },
  // xinmei
  {
    image: xinmei,
    name: "Xinmei(Evelyn) Liu",
    position: "Marketing",
    socials: [
      {
        platform: instagram,
        link: "https://www.instagram.com/evelyn_liuxinm/",
      },
    ],
    profileText: "I’m so happy to work with you guys together 🥰",
  },
  // xinyue
  {
    image: xinyue,
    name: "Xinyue Tao",
    position: "Frontend & Product Manager",
    socials: [
      { platform: instagram, link: "https://www.instagram.com/xinyue_xxtao/" },
    ],
    profileText: "Smile, my friend, smile!",
  },
  // akylai
  {
    image: akylai,
    name: "Akylai",
    position: "Frontend Apprentice",
    socials: [
      {
        platform: instagram,
        link: "https://www.instagram.com/akylaimanalieva/",
      },
    ],
  },
];

export const AlumniList: Array<Members> = [
  {
    image: oscar,
    name: "Oscar Wang",
    position: "Founder",
    socials: [
      { platform: github, link: "https://github.com/oscarwang114" },
      { platform: twitter, link: "https://twitter.com/OscarWang114" },
      {
        platform: facebook,
        link: "https://www.facebook.com/haohaowang.oscar",
      },
    ],
  },
  {
    image: isabella,
    name: "Isabella Hu",
    position: "Strategy",
  },
  {
    image: mei,
    name: "Mei",
    position: "Frontend Engineer",
    socials: [
      { platform: twitter, link: "https://twitter.com/Rimei9623" },
      { platform: instagram, link: "https://www.instagram.com/limengmmmm/" },
      {
        platform: weibo,
        link: "https://www.weibo.com/u/5000065316/home",
      },
    ],
  },
  {
    image: tang,
    name: "Yeping Tang",
    position: "Frontend Engineer",
    socials: [
      { platform: facebook, link: "https://www.facebook.com/nero.archer.94" },
    ],
    profileText: "Impressive I'm beginning to understand everything now",
  },
  {
    image: gu,
    name: "Jiaxian Gu",
    position: "Frontend Engineer",
    socials: [
      { platform: instagram, link: "https://www.instagram.com/jiaxiangu/" },
      { platform: email, link: "mailto:gujiaxian1997@gmail.com" },
      {
        platform: facebook,
        link: "https://www.faeook.com/GuJiaxian",
      },
    ],
    profileText: "Think different",
  },
  {
    image: george,
    name: "George Xia",
    position: "Product Manager",
    socials: [
      { platform: instagram, link: "https://www.instagram.com/austinzhu123/" },
      { platform: homepage, link: "https://austinzhu.dev/" },
      {
        platform: linkedin,
        link: "https://www.linkedin.com/in/yiming-zhu-622a98152",
      },
    ],
  },
  {
    image: zenda,
    name: "Zenda Chen",
    position: "Marketing",
    socials: [
      { platform: email, link: "mailto:zenda0211@fuji.waseda.jp" },
      { platform: instagram, link: "https://www.instagram.com/zenda_chen/" },
    ],
  },
  {
    image: kaede,
    name: "Kaede Iijima",
    position: "Software Engineer",
    socials: [
      { platform: github, link: "https://github.com/kaedejima" },
      {
        platform: linkedin,
        link: "https://www.linkedin.com/in/kaede-i-619a141aa/",
      },
    ],
  },
  {
    image: kaiqing,
    name: "Kaiqing",
    position: "Marketing",
    socials: [
      {
        platform: instagram,
        link: "https://www.instagram.com/kaiqing_chang?r=nametag",
      },
      {
        platform: linkedin,
        link: "https://www.linkedin.com/in/yiming-zhu-622a98152",
      },
      {
        platform: email,
        link: "mailto:kaiqing05@gmail.com",
      },
    ],
  },
  {
    image: hatori,
    name: "Zhen Cao",
    position: "Frontend Engineer",
    socials: [
      {
        platform: linkedin,
        link: "https://www.linkedin.com/in/%E8%87%BB-%E6%9B%B9-771718186/",
      },
      {
        platform: facebook,
        link: "https://www.facebook.com/profile.php?id=100023624678107",
      },
    ],
    profileText: "seize the day",
  },
  {
    image: yaoyuan,
    name: "Yuan Yao",
    position: "Backend Engineer",
    socials: [{ platform: github, link: "https://github.com/youenn98/" }],
  },
  {
    image: zhaohuaibo,
    name: "Huaibo Zhao",
    position: "Frontend Engineer",
    socials: [{ platform: email, link: "mailto:huaibozhao3@gmail.com" }],
    profileText:
      "For those who are or will be a member of Waseda university, I hope our project will add more joy to your campus life.",
  },
  {
    image: naomi,
    name: "Naomi Shen",
    position: "Backend Apprentice",
    socials: [
      {
        platform: instagram,
        link: "https://www.instagram.com/naomi.shen.1088/",
      },
    ],
    profileText: "Potato life is da best life",
  },
  {
    image: alina,
    name: "Alina Kenny",
    position: "Business",
    socials: [
      {
        platform: instagram,
        link: "https://www.instagram.com/alina_kenny119/",
      },
    ],
    profileText: "Dream, believe, and achieve!",
  },
  {
    image: kong,
    name: "Kong",
    position: "Contributor",
  },
];
