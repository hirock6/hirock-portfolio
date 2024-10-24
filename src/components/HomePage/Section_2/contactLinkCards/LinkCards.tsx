import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const ContactLinksArray = [
  {
    title: "Facebook",
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100028605347325",
  },
  {
    title: "Linkedin",
    icon: <FaLinkedin />,
    link: "linkedin.com/in/hirock-dutta-196a7a267",
  },
  {
    title: "Instagram",
    icon: <FaInstagramSquare />,
    link: "https://www.instagram.com/hirockdutta1998/?hl=en",
  },
  {
    title: "Twitter",
    icon: <FaTwitter />,
    link: "https://x.com/DuttaHiroc27696",
  },
  {
    title: "YouTube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@HirockDutta",
  },
];

const LinkCards = () => {
  return (
    <div className=" ">
      <Marquee pauseOnClick loop={0}>
        <div className=" flex gap-10 max-sm:gap-5 ">
          {ContactLinksArray.map((item: any, index: any) => (
            <div
              key={index}
              className={` ${(index =
                1 &&
                "ml-10 max-sm:ml-5")} bg-base-300 hover:bg-base-200 shadow-lg rounded-sm overflow-hidden `}
            >
              <Link
                href={item.link}
                target="_blank"
                className="flex items-center justify-between gap-4 w-full h-full px-5 py-2 "
              >
                <h1>{item.title}</h1>
                <h1 className=" text-emerald-600">{item.icon}</h1>
              </Link>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default LinkCards;
