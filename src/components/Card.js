import "../styles/card.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";

// Card component that passes in the props that will be used by imported components
// Card component renders the card object that contains a person's post (profile pic, profile name, card button, card image, card menu, card comments etc.)
const Card = (props) => {
  const { storyBorder, image, comments, likedByText, likedByNumber, hours } =
    props;
  return (
    <div className='card'>
      {/* Profile and card button component will be passed into the header portion of the app */}
      <header>
        <Profile iconSize='medium' storyBorder={storyBorder} />
        <CardButton className='cardButton' />
      </header>
      <img className='cardImage' src={image} alt='card content' />
      <CardMenu />
      <div className='likedBy'>
        <Profile iconSize='small' hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber} others</strong>
        </span>
      </div>
      <div className='comments'>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>
      <div className='timePosted'>{hours} HOURS AGO</div>
      <div className='addComment'>
        <div className='commentText'>Add a comment...</div>
        <div className='postText'>POST</div>
      </div>
    </div>
  );
};

export default Card;
