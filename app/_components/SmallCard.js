

const SmallCard = ({children, title, titleCenter = false}) => {
  return (
    <div className='SmallCard'>
      <div>
        <h3 className={titleCenter ? "tcenter" : ""}>{title}</h3>
      </div>
      {titleCenter || <hr/>}
      <div className={"children" + (titleCenter ? " tcenter" : "")}>
        {children}
      </div>
    </div>
  );
}

export default SmallCard;