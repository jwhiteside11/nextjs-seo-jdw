// VisibilitySensor.jsx
// https://codesandbox.io/p/sandbox/react-spring-scroll-ldxd3?file=%2Fsrc%2Fcomponents%2FVisibilitySensor.jsx%3A1%2C1-45%2C33

import { useCallback, useEffect, useMemo, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";


const AnimateOnScroll = ({children, duration = 400, delay = 0, from = {}, to = {}}) => {
  const [active, setActive] = useState(true);
  const [windowHeight, setWindowHeight] = useState(0);
  const [animatedClasses, setAnimatedClasses] = useState("hide");

  const resize = useCallback(() => setWindowHeight(window.innerHeight), []);

  useEffect(() => { 
    resize(); 
    window.addEventListener("resize", resize, {once: true}); 
    return () => window.removeEventListener("resize", resize, {once: true})
  }, [resize]);
  
  const startAnimation = useCallback(() => {
    setActive(false);
    setAnimatedClasses("view");
  }, []);

  const endAnimation = useCallback(() => {
    setActive(true);
    setAnimatedClasses("hide");
  }, []);

  const animationStyle = useMemo(() => active ? {...from} : {...to}, [active, from, to]);

  return (
    <VisibilitySensor active={true} partialVisibility 
      offset={active ? {bottom: Math.floor(windowHeight / 4)} : {top: 0}}
      onChange={isVisible => (isVisible ? startAnimation() : endAnimation())}>
      <div style={{transition: `all ${duration}ms ease ${delay}ms`, ...animationStyle}}>
        {children}
      </div>
    </VisibilitySensor>
  );
}


export const AppearOnScrollSlideUp = ({children, duration = 400, delay = 0}) => {
  return (
    <AnimateOnScroll duration={duration} delay={delay} from={{opacity: 0, transform: 'translateY(48px)'}} to={{opacity: 1, transform: 'translateY(0)'}}>
      {children}
    </AnimateOnScroll>
  );
}

export const AppearOnScrollSlideLeft = ({children, duration = 400, delay = 0}) => {
  return (
    <AnimateOnScroll duration={duration} delay={delay} from={{opacity: 0, transform: 'translateX(24px)'}} to={{opacity: 1, transform: 'translateX(0)'}}>
      {children}
    </AnimateOnScroll>
  );
}

export const AppearOnScrollSlideRight = ({children, duration = 400, delay = 0}) => {
  return (
    <AnimateOnScroll duration={duration} delay={delay} from={{opacity: 0, transform: 'translateX(-24px)'}} to={{opacity: 1, transform: 'translateX(0)'}}>
      {children}
    </AnimateOnScroll>
  );
}

export default AnimateOnScroll;