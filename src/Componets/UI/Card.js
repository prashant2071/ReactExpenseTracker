import "./card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>; 
   //Final result yesh bata dhekinxa {props.children} card component vitra ko data
};
export default Card;
