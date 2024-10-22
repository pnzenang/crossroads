import { Link } from 'react-router-dom';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const themes = { winter: 'winter', sunset: 'sunset' };

const getThemeFromLocalStorage = () => {
  return localStorage.getItem('theme') || themes.winter;
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getThemeFromLocalStorage);
  const handleTheme = () => {
    const { sunset, winter } = themes;
    const newTheme = theme === winter ? sunset : winter;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <header className='flex w-full items-center bg-base-200 py-3 justify-center sm:hidden z-50 '>
        <div className='w-11 h-11  mx-2 flex items-center justify-center rounded-xl hover:shadow-xl hover:bg-base-200'>
          <label className='swap swap-rotate text-primary'>
            <input type='checkbox' onChange={handleTheme} />
            {/* sun icon */}
            <BsMoon className='swap-on h-7 w-7 ' />
            {/* moon icon */}
            <BsSun className='swap-off h-7 w-7  ' />
          </label>
        </div>
        <div className='flex justify-end '>
          <Link
            to='/Login'
            className='inline-block whitespace-nowrap rounded-md border border-primary px-7 py-3 text-base font-medium text-primary transition hover:bg-primary hover:text-white'
          >
            Sign In
          </Link>
        </div>
      </header>
    </>
  );
};
export default Header;
