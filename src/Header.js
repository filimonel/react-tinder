import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import "./Header.css";

const Header = () => {
  return (
    // BEM
    <div className="header">
      <PersonIcon />
      <h3>Tinder</h3>
      <ForumIcon />
    </div>
  );
};

export default Header;
