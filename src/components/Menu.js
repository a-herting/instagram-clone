import "../styles/menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Messenger } from "../images/messenger.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import ProfileIcon from "./ProfileIcon";
import image from "../images/profile.jpg";

// Menu component that is rendered and used in the navigation bar. Contains icons for home, messenger, explore, notifications, and profile icon of user.
const Menu = () => {
  return (
    <div className='menu'>
      <Home className='icon' />
      <Messenger className='icon' />
      <Explore className='icon' />
      <Notifications className='icon' />
      <ProfileIcon iconSize='small' image={image} storyBorder={false} />
    </div>
  );
};

export default Menu;
