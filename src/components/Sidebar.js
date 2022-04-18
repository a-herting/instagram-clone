import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/profile.jpg";

// Sidebar component that is used to display logged in user's username, profile pick, as well as, the
// suggestions component and footer component.
function Sidebar() {
  return (
    <Sticky topOffset={-80}>
      <div className='sidebar'>
        <Profile
          username='a.herting'
          caption='Alex Herting'
          urlText='Switch'
          iconSize='big'
          image={image}
        />
        <Suggestions />
        <Footer />
      </div>
    </Sticky>
  );
}

export default Sidebar;
