import { Link } from 'react-router-dom';
import PATHS from '../../router/paths';

const headerMenus = [
  { id: 1, path: PATHS.home, label: 'Home' },
  { id: 2, path: PATHS.aboutUs, label: 'About Us' },
  { id: 3, path: PATHS.contactUs, label: 'Contact Us' },
];

const Header = () => {
  return (
    <div className='p-2 space-x-2 bg-sky-500 text-white'>
      {/* <Link to={PATHS.home}>Home</Link>
      <Link to={PATHS.aboutUs}>About Us</Link>
      <Link to={PATHS.contactUs}>Contact Us</Link> */}
      {headerMenus.map((item) => (
        <Link key={item.id} to={item.path} className='bg-sky-800 p-1 rounded-lg'>
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Header;
