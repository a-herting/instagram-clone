import "../styles/footer.scss";
//Footer that contains the standard links found in Instagram's footer
const Footer = () => {
  return (
    <div className='footer'>
      <ul className='links'>
        <li>About</li>
        <li>Help</li>
        <li>Press</li>
        <li>API</li>
        <li>Jobs</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Locations</li>
        <li>Top Accounts</li>
        <li>Hashtags</li>
        <li>Language</li>
      </ul>
      <div className='copyright'>@ 2020 INSTAGRAM FROM META</div>
    </div>
  );
};

export default Footer;
