import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links }) => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            onClick={() => handleScrollToSection(link.id)}
            href={`#${link.id}`}
            title={link.title}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;