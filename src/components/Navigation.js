import "../styles/navigation.scss";
import logo from "../images/instagramLogo.png";
import searchIcon from "../images/searchIcon.png";
import Menu from "./Menu.js";

// Navigation component that is imported into the app that contains the Instagram logo, search bar, and menu.
const Navigation = () => {
  return (
    <div className='navigation'>
      <div className='container'>
        <img className='logo' src={logo} alt='instagram logo' />
        <div className='search'>
          <img className='searchIcon' src={searchIcon} alt='search icon' />
          <span className='searchText'>Search</span>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Navigation;
