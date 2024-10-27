"use client";
import Style from "./nav.module.css";
import { addContext } from "@/utils/redux/Slice/slice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineBrightnessMedium } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { IoChevronDownSharp } from "react-icons/io5";
const RouteLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/info/about",
  },
  {
    title: "Services",
    path: "/info/services",
  },
  {
    title: "Skills",
    path: "/info/skills",
  },
  {
    title: "Portfolio",
    path: "/info/portfolio",
  },
];

const Nav = () => {
  const pathname = usePathname();

  const dispatch = useDispatch();

  const [theme, setTheme] = useState(false);
  const [navFlag, setNavFlag] = useState(false);
  const onTheme = ()=>{
    if (!theme) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  useEffect(() => {

    

    window.addEventListener("click", () => {
      setNavFlag(false);
    });

    if (!navFlag) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [ navFlag]);

  return (
    <nav className=" z-50 sticky top-0 max-md:bg-base-300 md:backdrop:filter md:backdrop-blur-3xl">
      <div className="  h-20 flex items-center justify-between gap-5">
        <button className=" text-3xl font-semibold max-md:text-2xl max-sm:text-xl">
          Hir<span className=" text-emerald-600">o</span>ck
          <span className="text-emerald-600">.</span>
        </button>

        <div className="">
          <div
            className={`max-md:fixed max-md:right-0 max-md:left-0 max-md:bg-slate-800/90 max-md:top-0 max-md:transition-all max-md:flex max-md:flex-col max-md:items-end max-md:h-full ${
              !navFlag ? "max-md:translate-x-full" : "max-md:translate-x-0 "
            }`}
          >
            <div
              className={` md:hidden max-md:block  text-white max-md:p-7 w-full max-md:flex max-md:justify-end max-md:backdrop:filter max-md:backdrop-blur-3xl`}
            >
              <button className="border">cancel</button>
            </div>
            <ul
              onClick={(e) => e.stopPropagation()}
              className={` ${Style.NavUl} max-md:overflow-y-scroll   max-md:flex-col max-md:bg-base-100 max-md:w-4/6 max-sm:w-3/6 max-md: h-full max-md:p-5 flex items-start gap-5 max-md:pb-32 
            } `}
            >
              {RouteLinks.map((item: any, index: any) => (
                <Link
                  onClick={() =>
                    setTimeout(() => {
                      setNavFlag(false);
                    }, 1000)
                  }
                  key={index}
                  href={item.path}
                  className={`${
                    pathname == item.path ? "text-emerald-600" : ""
                  }`}
                >
                  <li>{item.title}</li>
                </Link>
              ))}

              <li className=" relative group cursor-pointer ">
                <span className=" flex items-center ">
                  <span>Contact</span>
                  <IoChevronDownSharp className=" rotate-180 group-hover:rotate-0 " />
                </span>
                <ul className=" absolute max-md:text-sm  left-0 bg-base-300 shadow-lg p-2 rounded-md  sm:hidden sm:group-hover:block  max-md:collapse-content max-md:group-hover:collapse">
                  <li className=" cursor-auto">+8801700554293</li>
                  <li className=" cursor-auto">+8801945055264</li>
                  <li className=" cursor-auto">+8801576964131</li>
                </ul>
              </li>

              <button
                onClick={(e) => {
                  dispatch(addContext(theme)),onTheme(), setTheme(!theme);
                }}
              >
                <MdOutlineBrightnessMedium color="red" size={20} />
              </button>
            </ul>
          </div>
          <button
            className=" md:hidden"
            onClick={(e) => {
              e.stopPropagation(), setNavFlag(!navFlag);
            }}
          >
            <RxHamburgerMenu size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
