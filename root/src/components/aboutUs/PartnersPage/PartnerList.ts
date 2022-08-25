import email from "@app/assets/img/socialmediaicon/email.png";
import github from "@app/assets/img/socialmediaicon/github.png";
import homepage from "@app/assets/img/socialmediaicon/homepage.png";
import linkedin from "@app/assets/img/socialmediaicon/linkedin.png";
import weibo from "@app/assets/img/socialmediaicon/sina-weibo.png";
import twitter from "@app/assets/img/socialmediaicon/twitter.png";
import instagram from "@app/assets/img/socialmediaicon/instagram.png";
import facebook from "@app/assets/img/socialmediaicon/facebook.png";
import kredit from "@app/assets/img/partners/kredit.png"

export interface PartnerProfile {
    org: string;
    img: string;
    socials?: Array<{ link: string; platform: string }>;
    members?: Array<{ name: string; platform: string }>;
  }
  
export const PartnerList: Array<PartnerProfile> = [
    {
      org: "SPSE-EDP Student Council",
      img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/spse-edp-logo.png",
      socials: [
        {
          link: "https://www.facebook.com/SPSEEDPSC",
          platform: facebook,
        },
        {
          link: "https://www.instagram.com/spse_edp_student_council",
          platform: instagram,
        },
      ],
    //   members: [
    //     {
    //       name: "Peter Chai",
    //       img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/spse-edp-member1.png",
    //       social: [
    //         {
    //           link: "https://www.linkedin.com/in/peter-chai-233577158/",
    //           platform: linkedin,
    //         },
    //         {
    //           link: "https://www.facebook.com/siyuan.chai.77",
    //           platform: facebook,
    //         },
    //         {
    //           link: "https://twitter.com/PeterChai1013",
    //           platform: twitter,
    //         },
    //       ],
    //     },
    //     {
    //       name: "Ghafi Reyhan",
    //       img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/spse-edp-member2.png",
    //       social: [],
    //     },
    //   ],
    },
    {
        org: "Kredit Korea",
        img: kredit,
        socials : [
            {
                link: "https://www.instagram.com/kredit_waseda/",
                platform: instagram,
            }
        ]
    },
    {
      org: "CSSA",
      img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/cssa-logo.png",
      socials: [
        // {
        //   url: "",
        //   icon: <FontAwesomeIcon icon={faFacebook} />
        // }
      ],
    },
    {
      org: "WaLife",
      img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/walife-logo.png",
      socials: [
        // {
        //   url: "",
        //   icon: <FontAwesomeIcon icon={faFacebook} />
        // }
      ],
    },
    {
      org: "WTSA",
      img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/wtsa-logo.png",
      socials: [
        {
          link: "https://www.facebook.com/WasedaTaiwaneseStudentAssociation",
          platform: facebook,
        },
        {
          link: "https://www.instagram.com/wtsa.jp",
          platform: instagram,
        },
      ],
    }
];