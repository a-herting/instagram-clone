import "../styles/stories.scss";
import HorizontalScroll from "react-scroll-horizontal";
import Story from "./Story";

//Stories component that imports the story component. Stories component displays all of the rendered stories
// from the story component. Stories component represents the stories container above the cards.
function Stories() {
  return (
    <div className='stories'>
      <HorizontalScroll className='scroll' reverseScroll={true}>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </HorizontalScroll>
    </div>
  );
}

export default Stories;
