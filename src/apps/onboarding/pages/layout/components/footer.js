const Footer = ({ leftButton, middleButton, rightButton }) => {
  return (
    <div className={`d-flex p-4 justify-content-${leftButton || rightButton ? "between" : "center"}`}>
      { leftButton }
      { middleButton }
      { rightButton }
    </div>
  );
};

export default Footer;
