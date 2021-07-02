import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //need to understand

  return <div className={classes}>{props.children}</div>;
};

export default Card;
