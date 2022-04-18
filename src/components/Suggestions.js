import "../styles/suggestions.scss";
import Profile from "./Profile";

// Suggestions component that is imported into the sidebar component.
// This component is used for rendering suggested users to follow.
const Suggestions = () => {
  return (
    <div className='suggestions'>
      <div className='titleContainer'>
        <div className='title'>Suggestions For You</div>
        <a href='/'>See All</a>
      </div>

      <Profile
        caption='Followed by mapvault +3 more'
        urlText='Follow'
        iconSize='medium'
        captionSize='small'
      />
      <Profile
        caption='Followed by dadatlacak + 1 more'
        urlText='Follow'
        iconSize='medium'
        captionSize='small'
      />
      <Profile
        caption='Follows you'
        urlText='Follow'
        iconSize='medium'
        captionSize='small'
      />
      <Profile
        caption='Followed by dadatlacak + 7 more'
        urlText='Follow'
        iconSize='medium'
        captionSize='small'
      />
      <Profile
        caption='Followed by mapvault + 4 more'
        urlText='Follow'
        iconSize='medium'
        captionSize='small'
      />
    </div>
  );
};

export default Suggestions;
