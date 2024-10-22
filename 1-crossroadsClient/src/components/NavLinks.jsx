import { Link, NavLink } from 'react-router-dom';

export const links = [
  { id: 1, url: '.', text: 'home' },
  { id: 2, url: 'about', text: 'about us' },
  { id: 3, url: 'how', text: 'how it works' },
  { id: 4, url: 'services', text: 'services' },
  { id: 5, url: 'pricing', text: 'pricing' },
  { id: 6, url: 'contact', text: 'contact' },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink className='capitalize   ' to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;

const ListItem = ({ children, NavLink }) => {
  return (
    <li>
      <Link
        to={NavLink}
        className='flex py-4 text-base font-medium text-base-content hover:text-primary lg:mx-3 lg:inline-flex lg:py-6'
      >
        {children}
      </Link>
    </li>
  );
};
