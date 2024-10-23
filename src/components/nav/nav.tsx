"use client";

import { addContext } from "@/utils/redux/Slice/slice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineBrightnessMedium } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
const Nav = () => {

  const dispatch = useDispatch()

  const [theme, setTheme] = useState(false);
  const[navFlag,setNavFlag]=useState(false)



  useEffect(() => {
    if (!theme) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    window.addEventListener("click",()=>{
      setNavFlag(false)
    })

  }, [theme,navFlag]);

  return (
    <nav className="sticky top-0 max-md:bg-base-300 md:backdrop:filter md:backdrop-blur-3xl">
      <div className="  h-20 flex items-center justify-between gap-5">
        <div className="">Hirock.</div>
        <div className="">
          <ul onClick={(e)=>e.stopPropagation()} className={` max-md:fixed max-md:right-0 max-md:top-20 max-md:flex-col max-md:bg-base-200 max-md:w-52 max-md:p-5 ${!navFlag?"max-md:translate-x-full":"max-md:translate-x-0"} max-md:transition-all   flex items-start gap-5`}>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/about"}>
              <li>About</li>
            </Link>
            <Link href={""}>
              <li>Services</li>
            </Link>
            <Link href={""}>
              <li>Skills</li>
            </Link>
            <Link href={""}>
              <li>Portfolio</li>
            </Link>
            <Link href={""}>
              <li>Contact</li>
            </Link>
            <button onClick={(e) => {dispatch(addContext(theme)),setTheme(!theme)}}>
            <MdOutlineBrightnessMedium />
            </button>
          </ul>
          <button className=" md:hidden" onClick={(e)=>{ e.stopPropagation(),setNavFlag(!navFlag)}}>
          <RxHamburgerMenu size={30}/>
          </button>
        </div>
       
      </div>
    </nav>
  );
};

export default Nav;
