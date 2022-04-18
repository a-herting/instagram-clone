import "../styles/story.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";

// Story component that is imported into the stories bar component to display each story rendered (profile icon and account username)
function Story() {
  let accountName = users[Math.floor(Math.random() * users.length)].username;

  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }

  return (
    <div className='story'>
      <ProfileIcon iconSize='big' storyBorder={true} />
      <span className='accountName'>{accountName}</span>
    </div>
  );
}

export default Story;
