import logo from './assets/images/logo.svg';
import LinkImage from './LinkImage';

const Navbar = () => {
  return (
    <ul class='menu-list'>
      <li>
        <LinkImage
          imgSrc={logo}
          className={'logoImage'}
          imgAlt={'Logo'}
        ></LinkImage>
      </li>
      <li>Home</li>
      <li>New</li>
      <li>Popular</li>
      <li>Trending</li>
      <li>Categories</li>
    </ul>
  );
};

export default Navbar;
