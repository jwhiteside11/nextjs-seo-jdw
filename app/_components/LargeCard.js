import Link from "next/link";
import TriangleSVG from "../_svg/TriangleSVG";


const LargeCard = ({children, title, btn_link}) => {
  return (
    <div className={`LargeCard ${btn_link ? '' : 'no-btn'}`}>
      {/* <hr className="lg-deco"/> */}
      <div className="corner">
        <TriangleSVG color={'var(--text-color)'}/>
      </div>
      <h2>{title}</h2>
      {children}

      { btn_link && 
      <Link href="/for-bankers">
        <div className='m-button'>
          Learn More
        </div>
      </Link> }
    </div>
  );
}

export default LargeCard;