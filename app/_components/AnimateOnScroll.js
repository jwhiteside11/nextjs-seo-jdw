import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const VisibilitySensor = ({children, rootMargin = "0px", visibility = 1, onChange = () => {}}) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { onChange(entries[0].isIntersecting); },
      {
        rootMargin, // Margin around the root
        threshold: visibility, // Percentage of the target that needs to be visible
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, visibility, onChange]);


  return (
    <div ref={targetRef} style={{width: "fit-content"}}>
      {children}
    </div>
  );
}


const AnimateOnScroll = ({children, duration = 400, delay = 0, from = {}, to = {}}) => {
  const [active, setActive] = useState(true);
  
  const startAnimation = useCallback(() => {
    setActive(false);
  }, []);

  const endAnimation = useCallback(() => {
    setActive(true);
  }, []);

  const animationStyle = useMemo(() => active ? {...from} : {...to}, [active, from, to]);

  return (
    <VisibilitySensor visibility={0.01}
      rootMargin={active ? `0px 0px -25% 0px` : '0px'}
      onChange={isVisible => (isVisible ? startAnimation() : endAnimation())}>
      <div style={{width: "fit-content", transition: `all ${duration}ms ease ${delay}ms`, ...animationStyle}}>
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