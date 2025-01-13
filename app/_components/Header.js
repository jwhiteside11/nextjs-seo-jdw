"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import MenuSVG from '../_svg/MenuSVG';


const NavLink = ({main, pathname, route, content}) => {
  return (
    <Link href={route}>
      <span>{content}</span>
      <div className={`underrule ${main && pathname == route ? 'chosen' : ''}`}></div>
    </Link>
  );
};

const NavContent = ({main, pathname}) => {
  return (
    <>
      <NavLink main={main} pathname={pathname} route="/example-page" content={"EXAMPLE #1"} />
      <NavLink main={main} pathname={pathname} route="/example-page" content={"EXAMPLE #2"} />
      <NavLink main={main} pathname={pathname} route="/example-page" content={"EXAMPLE #3"} />
      <NavLink main={main} pathname={pathname} route="/example-page" content={"EXAMPLE #4"} />
    </>
  )
};

export default function Header({active, main = true}) {
  // Sidebar in mobile navbar
  const [sideBarVisible, setSideBarVisible] = useState(false);

  // Scroll effect on sticky header
  const [scrollProg, setScrollProg] = useState(0);

  useEffect(() => {
    setScrollProg(Math.min(1, Math.max(0, window.scrollY / 180)));
    
    window.addEventListener("scroll", () => {
      setScrollProg(Math.min(1, Math.max(0, window.scrollY / 180)));
    });
  }, []);

  // Use path to highlight active route in UI
  const pathname = usePathname();

  return (
    <header className="Header">
      <div className={`sidebar ${sideBarVisible ? 'show-side' : 'hidden'}`}>
        <div className='sidebar-inner'>
          <NavContent main={main} pathname={pathname}/>
        </div>
      </div>

      <div className={`inner ${sideBarVisible ? 'show-side' : ''}`} style={active ? {height: `${136 - scrollProg * 36}px`} : {}}>
        <div className='header-bg' style={active ? {opacity: scrollProg, height: `${136 - scrollProg * 36}px`} : {}}></div>

        <Link href="/">
          <div className='logo' style={active ? {scale: `${(115.0 - scrollProg * 15)}%`} : {}}>
            <span>Example Inc.</span>
            {/* <span>Capital</span> */}
          </div>
        </Link>

        <div className='links' style={active ? {scale: `${(110.0 - scrollProg * 10)}%`} : {}}>
          <NavContent main={main} pathname={pathname}/>
        </div>

        <div className={`menu ${main ? 'show': 'hidden'}`} onClick={() => setSideBarVisible(!sideBarVisible)}>
          <MenuSVG color={"#ffffff"}/>
        </div>
      </div>
    </header>
  );
}
