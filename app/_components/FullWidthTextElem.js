import { AppearOnScrollSlideLeft, AppearOnScrollSlideRight } from "./AnimateOnScroll";



const FullWidthTextElem = ({children, title}) => {
  return (
    <div className='FullTextElem'>
      <div className='full-txt-content'>
        { title && 
        <AppearOnScrollSlideRight>
          <h2>{title}</h2>
          <hr/>
        </AppearOnScrollSlideRight> }
        
        <div className='blurb'>
          <AppearOnScrollSlideLeft delay={200}>
            {children}
          </AppearOnScrollSlideLeft>
        </div>
      </div>
    </div>
  );
}

export default FullWidthTextElem;