import "../styles/comment.scss";

// Comment component rendered for each comment (containing account name and comment)
const Comment = (props) => {
  const { accountName, comment } = props;
  return (
    <div className='commentContainer'>
      <div className='accountName'>{accountName}</div>
      <div className='comment'>{comment}</div>
    </div>
  );
};

export default Comment;
