"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import DownloadSVG from '../_svg/DownloadSVG';
import MenuSVG from '../_svg/MenuSVG';

export default function Header({active, main = true}) {
  const [scrollProg, setScrollProg] = useState(0);
  const [sideBarVisible, setSideBarVisible] = useState(false);

  useEffect(() => {
    setScrollProg(Math.min(1, Math.max(0, window.scrollY / 180)));
    
    window.addEventListener("scroll", () => {
      setScrollProg(Math.min(1, Math.max(0, window.scrollY / 180)));
    });
  }, []);

  const pathname = usePathname();

  return (
    <header className="Header">
      <div className={`sidebar ${sideBarVisible ? 'show-side' : 'hidden'}`}>
        <div className='sidebar-inner'>
          <Link href="/for-bankers">
            <span>FOR BANKERS</span>
            <div className={`underrule ${main && pathname == '/for-bankers' ? 'chosen' : ''}`}></div>
          </Link>
          <Link href="/for-owners">
            <span>FOR OWNERS</span>
            <div className={`underrule ${main && pathname == '/for-owners' ? 'chosen' : ''}`}></div>
          </Link>
          <Link href="/approach">
            <span>APPROACH</span>
            <div className={`underrule ${main && pathname == '/approach' ? 'chosen' : ''}`}></div>
          </Link>
          
          <Link href="/team">
            <span>TEAM</span>
            <div className={`underrule ${main && pathname == '/team' ? 'chosen' : ''}`}></div>
          </Link>
        </div>

        <div className='download-outer'>
          {/* <Link href={`/example.pdf`} target="_blank" rel="noopener noreferrer" id='h-download' locale={false} download>
            <div className='download-contain'>
              <span>Firm Overview</span>
              <DownloadSVG color="white" />
            </div>
          </Link> */}
        </div>
      </div>

      <div className={`inner ${sideBarVisible ? 'show-side' : ''}`} style={active ? {height: `${136 - scrollProg * 36}px`} : {}}>
        <div className='header-bg' style={active ? {opacity: scrollProg, height: `${136 - scrollProg * 36}px`} : {}}></div>

        <Link href="/">
          <div className='logo' style={active ? {scale: `${(115.0 - scrollProg * 15)}%`} : {}}>
            <span>Winterford</span>
            {/* <span>Capital</span> */}
          </div>
        </Link>

        {/* <div className='links' style={active ? {scale: `${(110.0 - scrollProg * 10)}%`, transform: `translateY(${6 * (1 - scrollProg)}%)`} : {}}> */}
        <div className='links' style={active ? {scale: `${(110.0 - scrollProg * 10)}%`} : {}}>
          <Link href="/for-bankers">
            <span>FOR BANKERS</span>
            <div className={`underrule ${main && pathname == '/for-bankers' ? 'chosen' : ''}`}></div>
          </Link>
          <Link href="/for-owners">
            <span>FOR OWNERS</span>
            <div className={`underrule ${main && pathname == '/for-owners' ? 'chosen' : ''}`}></div>
          </Link>
          <Link href="/approach">
            <span>APPROACH</span>
            <div className={`underrule ${main && pathname == '/approach' ? 'chosen' : ''}`}></div>
          </Link>
          
          <Link href="/team">
            <span>TEAM</span>
            <div className={`underrule ${main && pathname == '/team' ? 'chosen' : ''}`}></div>
          </Link>

          <div className='download-outer'>
            {/* <Link href={`/example.pdf`} target="_blank" rel="noopener noreferrer" id='h-download' locale={false} download>
              <div className='download-contain'>
                <span>Firm Overview</span>
                <DownloadSVG color="white" />
              </div>
            </Link> */}
          </div>
        </div>

        <div className={`menu ${main ? 'show': 'hidden'}`} onClick={() => setSideBarVisible(!sideBarVisible)}>
          <MenuSVG color={"#ffffff"}/>
        </div>
      </div>
    </header>
  );
}
