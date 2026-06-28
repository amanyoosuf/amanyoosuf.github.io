import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown({ onClose, closeMobileMenu }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleLinkClick = () => {
    setClick(false);
    onClose && onClose();
    // Close the main navbar menu and trigger scroll in mobile view
    closeMobileMenu && closeMobileMenu();
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          const isAnchorLink = item.path.startsWith('#');
          
          return (
            <li key={index}>
              {isAnchorLink ? (
                <a
                  className={item.cName}
                  href={item.path}
                  onClick={handleLinkClick}
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={handleLinkClick}
                >
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
