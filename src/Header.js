import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    /* BEM */
    <div className="header">
      {/* if backButton prop is returned render icon back button istead of person */}
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://png2.cleanpng.com/sh/8a94253036d8b206b9fbb36db6f9484a/L0KzQYm3VsE4N6dwkpH0aYP2gLBuTgRqdpVqip91b3fyPbT2jgB2fJZ3Rdtsb372PcXwjvRmel46eqQBMUflc4S5g8g1Ol8ASKg8M0m8RYK8UskzOmQ2SKI7MEixgLBu/kisspng-tinder-logo-computer-icons-tinder-5b2617bc32c842.906339951529223100208.png"
          alt="tinder logo"
        />
      </Link>
      <Link to="/chats">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
