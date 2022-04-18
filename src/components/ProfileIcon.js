import "../styles/profileIcon.scss";

// Profile icon component that is used to generate profile icon for each user.
// We use the Math.random function to create random users with profile images if a image and username are not already provided.

const ProfileIcon = (props) => {
  const { iconSize, storyBorder, image } = props;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomId = getRandomInt(1, 70);

  let profileImage = image
    ? image
    : `https://i.pravatar.cc/150?img=${randomId}`;

  return (
    <div className={storyBorder ? "storyBorder" : ""}>
      <img
        className={`profileIcon ${iconSize}`}
        src={profileImage}
        alt='profile'
      />
    </div>
  );
};

export default ProfileIcon;
